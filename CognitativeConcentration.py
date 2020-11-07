from random import shuffle
from flask import Flask, render_template, request

app = Flask(__name__)


def numbers(num_nums=4):
    size = num_nums ** 2

    num_l = [i for i in range(size)]
    shuffle(num_l)

    num_d = {k: v + 1 for k, v in enumerate(num_l)}

    return num_d


@app.route('/', methods=['GET', 'POST'])
def index():
    if request.method == 'POST':
        text = request.form['text']
        try:
            table_nums = int(text)
        except ValueError:
            table_nums = 4

        info = numbers(table_nums)
    else:
        info = numbers()
        table_nums = 4

    return render_template('CCindex.html', info=info, num_rows=table_nums)


if __name__ == '__main__':
    app.run(port=5000, debug=True)
