# Note Taker Starter Code

As a small business owner
I WANT to be able to write and save notes

SO THAT I can organize my thoughts and keep track of tasks I need to complete


Note-taking application

Open Note Taker
        - Present a landing page with a link to a notes page
Click on link to the notes page
        -show page with existing notes listed in left-hand column
        - plus empty fields to enter a new note title and note text in the right hand column
Enter new note title and text
        -save icon appears in navigation at top of the page
CLick on save
        -new note entered is saved and appears in left hand column with other existing notes
Click on existing note in the list in the left hand column
        -note shows up in right hand column
Click on write icon in nav at top of page
        - present empty fields to enter a new note title and text


db.json file on back end - store and retreive notes using fs module


HTML Routes
        -GET /notes
                * return notes.html
        - GET * should return the index.html file

API ROUTES
        - GET /api/notes
                - read db.json and return all saved notes as json
        - POST /api/notes
                - receive new note to save on request body
                - add it to db.json
                - return new note

Give each note a unique id when saved (look into npm packages)

add DELETE route to application
        - DELETE /api/notes/:id
