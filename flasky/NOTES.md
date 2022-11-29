##other than flask run you could 
'''python

    if __name__ == '__main__':
        app.run()
'''
##to choose the python file
'''bash
    export FLASK_APP=hello.py
    flask run
'''
## regex for flask
    1.<name> - optional option
    '''python
        @app.route('/user/<name>')
        def user(name):
            return '<h1> hello {} </h1>'.format(name)
    '''