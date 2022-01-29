
  const list ={};
  function addTask(task) {
  if (task!==list[task]) {
      list[task]='To do';
      } else {console.log('Task already added')}
       }
  
  function changeStatus(task, status) {
  if (task in list) list[task]=status;
  else {console.log('Task does not exist')}
  }
  
  function deleteTask(task) {
      delete list[task];
  }
  
  function showList() {
         let TODO='';
         let INPROGRESS='';
         let DONE='';
         let EMPTY='\t-\n';
  
  for (let task in list) {
         
         if (list[task]==='To do') {
     TODO+= '\t' + `${task}` +'\n'; 
   }
   
      else if (list[task]==='In progress') {
     INPROGRESS +='\t' + `${task}` +'\n';
                 }
     else if (list[task]==='Done') {
     DONE+='\t' + `${task}` +'\n';
             }
             }      
    
   console.log('To do:\n' + `${TODO||EMPTY}`);
   console.log('In progress:\n'+`${INPROGRESS||EMPTY}`);
   console.log('Done:\n'+`${DONE||EMPTY}`);
                        }
    
 addTask('GET UP');
 addTask('LEARN');
 addTask('SLEEP');
 changeStatus('SLEEP','In progress');
 changeStatus('SLEEPP','In progress');
 //deleteTask('SLEEP');
  console.log(list);
  showList();

