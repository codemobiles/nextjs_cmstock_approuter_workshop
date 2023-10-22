# Project organization

Project Organization and File Colocation

for the project structure is aiming to use App Router in /app folder that all files in the folder default to server components
--/app
----/_components => symbol _  is used to make private and seperate routes segments (path) from files components  
----/(auth) => '()' is used to group routes and handle folder/layout that will not affect to routes segments (path) in this case is used to seperate auth pages and others routes
----/(routes) => this folder is used to seperate layout from (auth) and handle other routes  
----/api => use to manage internal api in nextjs(routes handler) ex. cookie in server side

ref: <https://nextjs.org/docs/app/building-your-application/routing/colocation>
