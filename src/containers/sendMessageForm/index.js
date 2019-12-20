import styles from './styles.scss';

/**
 * push Form
 *
 */

export const sendMessageForm = `<section class=${styles.container}>
   <div class="card">
     <div class="card-body">
       <form id="sendMessage">
         <div class="form-group">
           <label>Title</label>
           <input type="text" name="title" value="To do list" class="form-control">
         </div>
         <div class="form-group">
           <label>Message</label>
           <input type="text" name="message" value="welcome friends" class="form-control">
         </div>
         <div class="form-group">
           <label>Url</label>
           <input type="text" name="url" value="http://127.0.0.1:3000" class="form-control">
         </div>
         <div class="form-group">
           <label>Icon</label>
           <input type="text" name="icon" value="https://maxmax.github.io/rnbp/static/media/robot-dev.c6505b75.png" class="form-control">
         </div>
         <div class="form-group">
           <label>Badge</label>
           <input type="text" name="badge" value="https://maxmax.github.io/rnbp/static/media/robot-dev.c6505b75.png" class="form-control">
         </div>
         <div class="form-group">
           <label>Data</label>
           <input type="text" name="data" value="Hello World" class="form-control">
         </div>
         <br />
         <button class="btn btn-primary">Push Message</button>
       </form>
     </div>
   </div>
 </section>`;
