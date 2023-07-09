from flask import Flask,render_template,request,jsonify, send_file
from flask_cors import CORS
from keras.models import load_model
import keras.utils as image
import numpy as np
from PIL import Image, ImageChops,ImageEnhance
import cv2
import pickle as pkl
from keras.models import model_from_json
import streamlit as st
import replicate
import os
#import pyrebase
# Flask constructor takes the name of
# current module (_name_) as argument.
app = Flask(__name__)
cors = CORS(app, resources={r"/*": {"origins": "*"}})
#MODEL_PATH=r""
#model=load_model(MODEL_PATH)
#model.make_predict_function()
#config = {
#    "apiKey": "AIzaSyChVfg5L_Ny04swloiyNVBYOtxQ8K93Yiw",
#    "authDomain": "image-forgery-ca404.firebaseapp.com",
#    "projectId": "image-forgery-ca404",
#    "storageBucket": "image-forgery-ca404.appspot.com",
#    "messagingSenderId": "973079207870",
#    "appId": "1:973079207870:web:e1262d7e8d4359df7863ef"
#};
#firebase=pyrebase.initialize_app(config)
#auth=firebase.auth()
#storage=firebase.storage()

# The route() function of the Flask class is a decorator,
# which tells the application which URL should call
# the associated function.
def convert_to_ela_image(path, quality=90):
    temp_filename = 'temp_file_name.jpg'
    ela_filename = 'temp_ela.png'
    print(path)
    image = Image.open(path).convert('RGB')
    image.save(temp_filename, 'JPEG', quality = quality)
    temp_image = Image.open(temp_filename)
    
    ela_image = ImageChops.difference(image, temp_image)
    
    extrema = ela_image.getextrema()
    max_diff = max([ex[1] for ex in extrema])
    if max_diff == 0:
        max_diff = 1
    scale = 255.0 / max_diff
    
    ela_image = ImageEnhance.Brightness(ela_image).enhance(scale)
    
    return ela_image
image_size=(256,256)


def prepare_image(image_path):
    return np.array(convert_to_ela_image(image_path,90).resize(image_size)).flatten()/255



json_file = open("model.json",'r')
model_json = json_file.read()
json_file.close()
model = model_from_json(model_json)
# load weights into new model
model.load_weights("model.h5")



def predict(image,model) :
    #im = Image.open(image)
    #print("_________________________")
    #print(im)
    ela_img=prepare_image(image)
    ela_img=ela_img.reshape(1,256,256,3)
    prediction=model.predict(ela_img)
    
    return ela_img,prediction


@app.route('/',methods=['GET'])
# ‘/’ URL is bound with hello_world() function.

def hello_world():
    return render_template('index.html')

@app.route('/upload',methods=['POST'])
def main_func():
    print(request.files)
    imagefile=request.files['file']
    image_path="./images/"+imagefile.filename
    imagefile.save(image_path)
    #path_on_cloud="images\\"+imagefile.filename
    #storage.child(path_on_cloud).put(image_path)  
    #image_url=storage.child(path_on_cloud).get_url(None)
    ela,image_pred=predict(imagefile,model)
    #print(image_pred)
    ela=convert_to_ela_image(image_path)
    print(ela)
    ela.save("./images/ela.jpg")
    if image_pred>0.5:
        value='real'
    else:
        value='forged'
        image_pred=1-image_pred
    print(value,image_pred*100)
    #print(image_url)
    predictions=image_pred*100
    os.environ["REPLICATE_API_TOKEN"] ="r8_DJ84fEA8t7oET6jFQiwjDlTPiM4OUdK1Grt9c"
    output = replicate.run(
    "highwaywu/image-forgery-detection:ab6f81afdf0de95354d44b61c18f4dfe31dc0ad83da8b0406d57afff8f6ace08",
     input={"image": open(image_path, "rb")} )
    print(output)
    
    predss=predictions.item()

    return {"predss":predss,"fake_or_real":value,"region":output}

 
if __name__=='__main_':
    app.run(debug=True)