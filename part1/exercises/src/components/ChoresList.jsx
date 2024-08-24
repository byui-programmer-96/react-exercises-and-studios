export default function ChoresList () {
   return <div>
            <h1 className={classes.choresHeading}><u>Chores List:</u></h1>
               <ol>
                  <li className={classes.choresText}><i>Take out trash</i></li>
                  <li className={classes.choresText}><i>Weed Garden</i></li>
                  <li className={classes.choresText}><i>Wash Dishes</i></li>
                  <li className={classes.choresText}><i>Wash Laundry</i></li>
               </ol>
   </div>;
}