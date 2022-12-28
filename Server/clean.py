import torch
import librosa
import numpy as np
from scipy import signal
from scipy.io import wavfile
import pickle 
from transformers import Wav2Vec2ForCTC, Wav2Vec2Tokenizer
from pydub import AudioSegment


tokenizer = Wav2Vec2Tokenizer.from_pretrained("facebook/wav2vec2-base-960h")
model = Wav2Vec2ForCTC.from_pretrained("facebook/wav2vec2-base-960h")

def bigcleaner():
    file_name = 'music/temp.mp3'
  
    # assign files
    input_file = file_name
    
    # convert mp3 file to wav file
    sound = AudioSegment.from_wav(input_file)
    sound.export(input_file, format="wav")

    y1,sr = librosa.load(input_file, mono=True, sr=16000, offset=0, duration=10)

    S1 = librosa.feature.melspectrogram(y=y1, sr=sr, n_mels=64)
    D1 = librosa.power_to_db(S1, ref=np.max)

    b,a = signal.butter(10, 2000/(sr/2), btype='highpass')
    yf = signal.lfilter(b,a,y1)

    Sf1 = librosa.feature.melspectrogram(y=yf, sr=sr, n_mels=64)
    Df1 = librosa.power_to_db(Sf1, ref=np.max)

    data = wavfile.read(input_file)
    framerate = data[0]
    sounddata = data[1]
    time = np.arange(0,len(sounddata))/framerate
    input_audio, _ = librosa.load(input_file, sr=16000)
    input_values = tokenizer(input_audio, return_tensors="pt").input_values
    logits = model(input_values).logits
    predicted_ids = torch.argmax(logits, dim=-1)
    transcription = tokenizer.batch_decode(predicted_ids)[0]
    print(transcription)
    return transcription