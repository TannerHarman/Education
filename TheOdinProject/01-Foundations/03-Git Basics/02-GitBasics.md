#### Knowledge Check


 ##### How do you create a new repository on GitHub?
You can use the web interface on GitHub to create a new repository.

 ##### How do you copy a repository onto your local machine from GitHub?
To copy it to your local machine, you click the code button (top right) and select ssh (assuming you've set up the SSH keys between your machine and GitHub), the copy that line. Once you've copied that, you can go into your terminal, navigate to the folder you want your project to be in, then type in git clone (followd by that ssh url).

 ##### What is the default name of your remote connection?
origin

 ##### Explain what origin is in git push origin main.
It's the default name of the remote storage location. It's convention to call it origin. This command is telling you to push the code to the remote repository on the main branch.

 ##### Explain what main is in git push origin main.
Main in this context is the default name for the master branch. It's where all the code eventually goes so that you can put the app together in one piece. If you simply typed in git push, you'd push to the remote repo on the main branch.

 ##### Explain the two-stage system that Git uses to save files.
The two stages before pushing your code is adding them to be commited. Basically this puts them in an area with a 'ready to process' kind of lable. Then you commit those changes with a named explanation or assignment. You cannot commit without adding them via git add.

 ##### How do you check the status of your current repository?
git status

 ##### How do you add files to the staging area in git?
git add (filename) | git add . (to add all files)

 ##### How do you commit the files in the staging area and add a descriptive message?
git commit -m '(message goes here)'

 ##### How do you push your changes to your repository on GitHub?
git push | git push origin (add branch here).

 ##### How do you look at the history of your previous commits?
git log