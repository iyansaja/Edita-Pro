import React, { Component } from 'react';
import VideoTrimmer from './VideoTrimmer';
import FilterSelector from './FilterSelector';
import ExportButton from './ExportButton';

class VideoEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoFile: null,
            startTime: 0,
            endTime: 0,
            selectedFilter: null,
        };
    }

    handleVideoUpload = (event) => {
        const file = event.target.files[0];
        this.setState({ videoFile: file });
    };

    setTrimTimes = (start, end) => {
        this.setState({ startTime: start, endTime: end });
    };

    applyFilter = (filter) => {
        this.setState({ selectedFilter: filter });
    };

    render() {
        return (
            <div className="video-editor">
                <input type="file" accept="video/*" onChange={this.handleVideoUpload} />
                {this.state.videoFile && (
                    <>
                        <VideoTrimmer 
                            videoFile={this.state.videoFile} 
                            setTrimTimes={this.setTrimTimes} 
                        />
                        <FilterSelector 
                            applyFilter={this.applyFilter} 
                        />
                        <ExportButton 
                            videoFile={this.state.videoFile} 
                            startTime={this.state.startTime} 
                            endTime={this.state.endTime} 
                            selectedFilter={this.state.selectedFilter} 
                        />
                    </>
                )}
            </div>
        );
    }
}

export default VideoEditor;