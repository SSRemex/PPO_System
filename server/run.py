from App import app, bp


if __name__ == '__main__':

    app.register_blueprint(bp)
    app.run(host="0.0.0.0", port="8666", debug=True)
