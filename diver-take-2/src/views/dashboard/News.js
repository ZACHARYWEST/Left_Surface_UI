
import ky_lock_section from '../../assets/images/ky_lock_section.jpg';
import working_dark from '../../assets/images/working_dark.jpg';

function News(){

    return(
        <div className="container">
            <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
                <div class="col-md-6 px-0">
                    <h1 class="display-4 fst-italic">Left Surface - Manifold</h1>
                    <p class="lead my-3">Read latest news, view recent posts, enjoy the water...</p>
                </div>
            </div>

            <div class="row mb-2">
                <div class="col-md-6">
                    <div class="row news_card g-0 rounded flex-md-row mb-4 shadow-sm ">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-primary">Local</strong>
                            <h3 class="mb-0">COMMERCIAL DIVER PORTION OF KENTUCKY LOCK COMPLETED</h3>
                            <div class="mb-1 text-muted">
                                July 12
                            </div>
                            <p class="card-text mb-auto">Mainstream Commercial Divers have finished their 3-year contract with the Army Corps of Engineers.</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img className="news_photo_fit" src={ky_lock_section} alt="Placing in section of KY Lock" />    
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row news_card g-0 rounded flex-md-row mb-4 shadow-sm ">
                        <div class="col p-4 d-flex flex-column position-static">
                            <strong class="d-inline-block mb-2 text-success">Global</strong>
                            <h3 class="mb-0">Divers do it deeper</h3>
                            <div class="mb-1 text-muted">
                                 June 11
                            </div>
                            <p class="mb-auto">These guys are doing it in the dark...</p>
                            <a href="#" class="stretched-link">Continue reading</a>
                        </div>
                        <div class="col-auto d-none d-lg-block">
                            <img className="news_photo_fit" src={working_dark} alt="Divers working in dark" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default News;