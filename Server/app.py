from flask import Flask , render_template , request
import pickle 
import os
import clean as cleaner
from flask_cors import CORS

#creating flask app
app = Flask(__name__)
CORS(app)


@app.route("/api/audio", methods=['GET', 'POST'])
def hello():
    if request.method == "POST":
        print(request.files)
        save_path = os.path.join('music', "temp.mp3")
        request.files['uploadedFile'].save(save_path)

        """save_path = os.path.join('./', "temp.wav")
        request.files['music_file'].save(save_path)"""
        #aud = request.data
        #print(aud)
        #
        #file_extension = os.path.splitext(aud)[1]
        #if file_extension not in ('.mp3', '.wav', '.flac'):
        #    print("Unsupported File Format")
        #    return "Please Upload an audio file only!"


        print("Cleaner Mod")
        trans = cleaner.bigcleaner()
        trans = trans
        return trans 

    #return None 

    
if __name__ == "__main__":
    app.run(debug=True,port=8000)