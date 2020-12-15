Group Project Instructions
==========================

Please read these carefully. DO NOT PUSH TO MAIN BRANCH!

Python/Django Setup and Getting Started
---------------------------------------

1. Clone this repo if you haven't already. 
`git clone https://github.com/Dec2020PandA/Django_React_Resume_Builder_Group.git`

If you have already cloned the repo, move onto the next step. 

2. Go into the PROJECT directory.
`cd DJANGO_REACT_RESUME_BUILDER_GROUP`
`cd PROJECT`

3. If you don't see the PROJECT folder, you may need to update with origin main.
`git pull origin main` or just `git pull` as long as you are in the main branch.

4. Once you main branch is updated, MAKE A NEW BRANCH. Name the branch something appropriate.
`git checkout -b feature_branch` 

5. Make sure you are in the new branch.
`git status`

6. Now go into the PROJECT folder as described in step 2.

7. Check if Python is installed on your computer.
`python --version` 

8. If you don't have Python, you will need to install it. Visit python.org for instructions.
If you already have Python, move onto to step 9.

9. Create a virtual environment in the PROJECT folder. Name it `.venv` so that it will be ignored
by Git. **You may need to install virtual environments.**
`python -m venv .venv`

10. Activate the environment. (You may need to look up the right command for your computer OS.)
Windows: `.venv/Scripts/activate.ps1`

11. You'll know when it's activated because there will be a (.venv) in front of your command line.

12. Go into the `backend` folder.
`cd backend`

13. Now install the requirements for local development.
`pip install -r requirements.txt`

14. You can run the server to check it out.
`python manage.py runserver`

15. Go to `http://127.0.0.1:8000/api/resumes/` to check out the api page. There is currently no frontend until it is added with React. 

16. You should also look into the `resume_builder_app` code for reference. Look for the `models.py` file to see which fields the Resume model has, as you will need to know the names of those fields to reference them in React. You should not need to change anything in the `backend` folder if you are working on the Frontend. 
