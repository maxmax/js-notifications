import styles from './styles.scss';

/**
 * push Form
 *
 */

export const sendMessageForm = `<section class=${styles.container}>
  <section class="container">
    <div class="text-center">
      <button class="btn btn-primary" id="sendMessageModalBtn">Send Message</button>
      <br />
      <br />
      <br />
    </div>
    <!-- Modal -->
    <div class="modal fade" id="sendMessageModalWrapper" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Send message</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close" id="sendMessageModalWrapperClose">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
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
              <button class="btn btn-primary btn-block">Push Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</section>`;
