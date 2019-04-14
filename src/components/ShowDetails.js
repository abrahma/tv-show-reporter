import React from 'react';
import Modal from 'react-responsive-modal';
import StarRatings from 'react-star-ratings';
import TagViewer from './TagViewer';
import HorizontalCastList from './HorizontalCastList';
import renderHTML from 'react-render-html';
import styles from '../resources/styles/ShowDetails.css';

function ShowDetailsModal(props){

    const {open,closeModal,details} = props;

    return(
        <Modal open={open} onClose={closeModal} center>
             <h2>{details.name}</h2>
             <div className="ShowDetailsModal">
                 <div className="DetailsCenter">
                     <div className="DetailsImage">
                        <img src={details.image ? details.image.original : null}/>
                     </div>
                     <div className="DetailsInsights">
                            <div>
                                <StarRatings
                                         rating={parseInt(details.rating.average) > 0 ? details.rating.average/2 : 0}
                                         starRatedColor="blue"
                                         starDimension="30px"
                                         starSpacing="5px"
                                         numberOfStars={5}
                                         name='showRating'
                                />
                                <TagViewer values={details.genres}></TagViewer>
                            </div>
                            <table className="InsightTable">
                            <tbody>
                                <tr>
                                    <td className="InsightHeader">Language</td>
                                    <td>{details.language}</td>
                                </tr>
                                </tbody>
                                <tbody>
                                <tr>
                                    <td className="InsightHeader">Official Site</td>
                                    <td><a href={details.officialSite}>{details.officialSite}</a></td>
                                 </tr>
                                 </tbody>
                                 <tbody>
                                 <tr>
                                    <td className="InsightHeader">Status</td>
                                    <td><span className={details.status === "Ended" ? "EndStatus" : "OngoingStatus"}>{details.status}</span></td>
                                 </tr>
                                 </tbody>
                            </table>

                        <div className="CastStrip">
                            <h3>Cast</h3>
                            <HorizontalCastList showId={details.id}></HorizontalCastList>
                        </div>
                     </div>
                 </div>
                    {details.summary && <div className="ShowSummary">{renderHTML(details.summary)}</div>}
             </div>
        </Modal>);
}

export default ShowDetailsModal;