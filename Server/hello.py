from flask import Flask,redirect
from flask import request
import os
import json
from flask_cors import CORS


app = Flask(__name__)

CORS(app)

@app.route('/api/audio', methods=['GET', 'POST'])
def get_score():
    if request.method == 'POST':
         print(request.files)
         save_path = os.path.join('music', "temp.mp3")
         request.files['uploadedFile'].save(save_path)
         data = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum autem fugiat in, eaque ducimus atque consequuntur consequatur est delectus quam ipsam eveniet quaerat dignissimos dolor minima nihil nobis corrupti at deserunt veritatis! Praesentium ad similique nihil maxime. Mollitia et culpa, fuga assumenda beatae tempore ab optio, alias, sit unde eligendi dolorum voluptatum eum ipsa! Suscipit totam rem illo. Molestias explicabo praesentium cum neque commodi debitis eveniet modi nesciunt, quod maxime atque labore et cupiditate. Sit hic corrupti beatae ut libero eius natus aliquam provident, soluta laboriosam. In quidem neque quas sit, quos saepe alias exercitationem laboriosam dolorem. Atque minima doloremque porro quo necessitatibus, officia consectetur. Minima tempora veritatis esse quis, enim dolorum porro quia, reprehenderit, temporibus molestias facilis aspernatur fuga. Omnis, accusantium culpa ipsa sit id quisquam non, labore veniam modi aut repudiandae minus saepe accusamus nulla, inventore asperiores provident dolore? Odio consequuntur reprehenderit minus. Laboriosam eos quis molestias maiores incidunt cupiditate id sint nulla reprehenderit itaque modi ipsam dolorum, esse optio praesentium dolor quod corrupti. Id provident perferendis veritatis veniam rem nulla, dolorem sed eaque cupiditate, praesentium illum nostrum ipsam corrupti blanditiis libero natus minima aliquam. Temporibus, ab corporis perspiciatis cupiditate dignissimos vero iure non tempora sequi maxime. Deleniti quod aperiam provident vel cum officia ab modi doloribus ex assumenda harum at veritatis laudantium illo, impedit alias, facere veniam? Consequatur quidem quis delectus asperiores tenetur eius dicta repellat, facere possimus mollitia nihil animi suscipit magni architecto. Iste et optio provident exercitationem nam dicta sint veniam sequi aliquam porro praesentium voluptate deleniti quo ut recusandae officiis ab, sit repellat sunt tempore, autem nihil, aspernatur quas asperiores! Alias vel ex possimus perspiciatis praesentium odit unde fugit quis quisquam tempora tenetur suscipit, atque corporis saepe illum, eligendi minima quod velit. Cumque, fugit sequi. Quia autem similique, dignissimos veniam debitis esse laborum consequuntur!"
         return data

@app.route("/",methods=['GET'])
def go():
    return 'hello ji'



    
if __name__ == "__main__":
    app.run(debug=True,port=8000)