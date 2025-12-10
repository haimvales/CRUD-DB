import { DB } from "./db.js";
import { create_user, Delete_user, edituser, Read_user_by_ID, search_by_username, shoe, show_menu } from "./utils.js";
import input from 'analiza-sync'

let run = true

while(run){
    console.table(DB.users)
    console.log(DB.lastUpdate)
    show_menu()
    const Clicking = input()
    switch (Clicking){
        case '1':
            shoe(DB)
            break;
        case '2':
            create_user(DB)
            break;
        case '3':
            console.log(Read_user_by_ID(DB))
            break;
        case '4':
            edituser(DB)
            break;
        case '5':
            Delete_user(DB)
            break;
        case '6':
            console.table(search_by_username(DB))
            break;
        case '7':
            run = !run
            break;
        default:
            console.log(`Type a valid number.`);
            break;
    }
    input('enter')
}



