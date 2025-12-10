import { DB } from "./db.js";
import {nanoid} from 'nanoid'
import { isLetters, proper_length } from "./logic.js";
import input from 'analiza-sync'

export function shoe(DB){console.table(DB.users)}

export function create_user(DB){   
    const username = input("your name:")
    const role = input("your role:")
    if(!(isLetters(username)&&proper_length(username))) {
        console.log(`username is not proper`);
        return
    }
    if(!(isLetters(role)&&proper_length(role))) {
        console.log(`role is not proper`);
        return
    }
    const id = nanoid()
    const user = {id,username,role}
    DB.users.push(user)
    DB.lastUpdate = new Date()
}

export function Read_user_by_ID(DB){
    const id = input(`enter id`)
    const result = DB.users.find(user => user.id === id)
    if(result == undefined)
        return `no found`
    return result
}

export function edituser(DB){
    const id = input(`enter id`)
    const result = DB.users.findIndex(user => user.id === id)
    if(result == -1){
        console.log(`no found`) 
        return
    }
    const username = input("your name:")
    const role = input("your role:")
    if(isLetters(username)&&proper_length(username)){
        DB.users[result].username = username
        console.log(`username Updated successfully`);        
    }
    if(isLetters(role)&&proper_length(role)){
        DB.users[result].role = role
        console.log(`role Updated successfully`);        
    }
    DB.lastUpdate = new Date()
}

export function Delete_user(){
    const id = input(`enter id`)
    const result = DB.users.findIndex(user => user.id === id)
    if(result == -1){
        console.log(`no found`) 
        return
    }
    const approval = input(`Confirm deletion (Y)`)
    if( approval !== 'Y'){
        console.log(`no enter Y`);
        return
    }
    DB.users.splice(result,1)  
    console.log(`Delete user`);
    DB.lastUpdate = new Date()
}

export function search_by_username(DB){
    const search = input('enter wotd search')
    const users = DB.users.filter(user => user.username.includes(search))
    if (users.length)
        return users
    return false
}



export function show_menu(){
    console.log(`1. List all users 
                 2. Create user 
                 3. Read user by ID 
                 4. Update user 
                 5. Delete user
                 6. Search by username 
                 7. Exit`);    
}