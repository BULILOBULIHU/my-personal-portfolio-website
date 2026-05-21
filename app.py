from flask import Flask, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return "<h1>Portfolio API is running</h1><p>Go to /api/portfolio to see details.</p>"

@app.route("/api/portfolio", methods=["GET"])
def portfolio():
    data = {
        "name": "GERALD BULILO BULIHU",
        "about": "Student passionate about web development, cloud computing, programming, and technology.",
        "skills": ["C++", "PHP (OOP)", "HTML", "CSS", "JavaScript", "Python", "Cloud Computing"],
        "qualifications": {
            "degree": "Bachelor’s degree in Data Science",
            "status": "Soon to qualify"
        },
        "projects": [
            {
                "title": "Personal Portfolio Website",
                "description": "A portfolio site built with HTML and CSS to showcase my profile and skills.",
                "link": "https://bulilobulihu.github.io/abc"
            },
            {
                "title": "AI-powered Parent Engagement and School Management System (PESS)",
                "description": "Helps parents track trends, results, and school-related information about their children.",
                "link": "https://github.com/BULILOBULIHU/my-personal-portfolio-website"
            }
        ],
        "contact": {
            "email": "bulilobulihu@gmail.com",
            "phone": "+255 0753253010",
            "github": "https://github.com/BULILOBULIHU"
        }
    }
    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
