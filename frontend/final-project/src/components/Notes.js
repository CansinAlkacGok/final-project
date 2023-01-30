import "../styles/NotesStyles.css";

export default function Notes() {
  return (
    <div>
      <h1>Notes</h1>
      <div className="notesContainer">
        <section className="notesSection">
          <h3>
            Recently opened <i class="fa-sharp fa-solid fa-arrow-down"></i>
          </h3>
          <div className="notesTags">
            <p className="noteTag diary">Diary</p>
            <p className="noteTag fitness">Fitness Plan</p>
          </div>
        </section>
        <section className="notesSection">
          <h3>Favorites</h3>

          <div className="notesTags">
            <p className="noteTag diet">Diet Plan</p>
            <p className="noteTag fitness">Fitness Plan</p>
            <p className="noteTag inspiration">Inspiration</p>
          </div>
        </section>
        <section className="notesSection">
          <h3>
            All <i class="fa-sharp fa-solid fa-arrow-down"></i>
          </h3>
          <div className="notesTags">
            <p className="noteTag diet">Diet Plan</p>
            <p className="noteTag fitness">Fitness Plan</p>
            <p className="noteTag inspiration">Inspiration</p>
            <p className="noteTag learning">Learning</p>
            <p className="noteTag jogging">Jogging</p>
            <p className="noteTag fitness">Fitness Plan</p>
            <p className="noteTag inspiration">Inspiration</p>
            <p className="noteTag coding">Coding</p>
            <p className="noteTag diary">Diary</p>
            <p className="noteTag fitness">Fitness Plan</p>
          </div>
        </section>
      </div>
    </div>
  );
}
