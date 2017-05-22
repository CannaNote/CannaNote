1. What are we building?
   A weed strain journal for users to catalog their experiences.
2. Who are we building it for?
   Cannabis users, medicinal and recreational.
3. What features do we need to have?
   Dashboard
   - auth (sign in/sign out)
   - account settings
   - Profile
   - My Journal
   Journal Entries (CRUD)
   - Master view
   - Detail view
   Strain List (CRUD) ?

User Stories -

As a user, I want to be able have access to a dashboard , so that I can manage my weed strain journal.

As a user, I want to be able to edit my profile, so that I can update my information when needed. 

As a user, I want to be able to create a journal entry, so that I can list the affects, and review the strain. 

As a user, I want to be able to view my journal entries, so that I can manage them easily.

As a user, I want to be able to recieve suggestions on other strains, based on prefereneces.

Model our data

User

- name: string
- email: string
- password: hashed
- profileUrl: string

JournalEntry

- userId: foreignKey

- title:string
- body:textarea
- timestamp:datetime
- strain: foreignKey (strainId)
- effects:serializedString

Strains

- name:string
- type:string
- thc:float

Think thorugh the pages we need

Landing page

Dashboard/journal#master

Journal#master

Strain#Master
