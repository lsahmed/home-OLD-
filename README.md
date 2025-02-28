# lsahmed/home - Portfolio Website 🏠

This repository contains the source code for my personal portfolio website, built using Django 🐍, HTML 🌐, Tailwind CSS (via CDN) 🎨, and MongoDB (through MongoDB Atlas) ☁️.

## Technologies Used

* **Django:** A high-level Python web framework for rapid development 🚀.
* **HTML:** Standard markup language for creating web pages 📄.
* **Tailwind CSS (CDN):** A utility-first CSS framework for rapid UI development 🖌️, included via CDN.
* **MongoDB (Atlas):** A NoSQL database hosted on MongoDB Atlas 💾.
* **Python:** The programming language used for the backend 💻.

## Features

* Showcase of my projects 📂.
* Information about my skills and experience 🧑‍💻.
* Contact information 📧.
* (Optional: Blog section, if implemented ✍️)

## Setup and Installation

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/lsahmed/home.git](https://github.com/lsahmed/home.git)
    cd home
    ```

2.  **Create a virtual environment (recommended):**

    ```bash
    python3 -m venv venv
    source venv/bin/activate  # On Linux/macOS 🐧/🍎
    venv\Scripts\activate  # On Windows 🪟
    ```

3.  **Install dependencies:**

    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure MongoDB Atlas Connection:**

    * You are connecting to MongoDB Atlas using the connection string defined in `db_connection.py`.
    * Ensure you have a MongoDB Atlas account and have created a database 🌐.
    * Ensure that you have the correct connection string inside of your `db_connection.py` file, and that your IP address is whitelisted in your MongoDB Atlas network settings 🔒.
    * Example `db_connection.py` file:

        ```python
        from pymongo import MongoClient

        client = MongoClient("YOUR_MONGODB_ATLAS_CONNECTION_STRING")
        db = client["YOUR_DATABASE_NAME"]
        ```

5.  **Run migrations:**

    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```

6.  **Create a superuser (for admin access):**

    ```bash
    python manage.py createsuperuser
    ```

7.  **Run the development server:**

    ```bash
    python manage.py runserver
    ```

8.  **Access the website:**

    * Open your web browser and navigate to `http://127.0.0.1:8000/` 🖥️.

## Tailwind CSS (CDN)

* Tailwind CSS is included via CDN in the HTML templates. This means you don't need to install or build Tailwind CSS locally 🚀.
* If you need advanced Tailwind configurations, or to use custom plugins, you will need to switch from the CDN to a local installation 🛠️.

## Customization

* Modify the HTML templates in the `templates/` and your application's `templates/` directories to customize the website's appearance 🎨.
* Update the `models.py` file to define your data models 📊.
* Modify the `views.py` file to handle requests and render templates ⚙️.
* Change the static files to reflect your styling and assets 🖼️.

## Deployment

* For deployment, you can use platforms like Heroku, AWS, or DigitalOcean ☁️.
* Remember to configure your production settings in `settings.py` (e.g., database connection, static file handling) ⚙️.
* Ensure your production environment has the correct Python version and the necessary MongoDB connection setup ✅.

## Contributing

* If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request 🤝.
