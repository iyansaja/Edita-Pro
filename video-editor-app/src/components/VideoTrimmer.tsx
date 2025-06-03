import React, { Component } from 'react';

interface VideoTrimmerProps {
  onTrim: (start: number, end: number) => void;
}

interface VideoTrimmerState {
  start: number;
  end: number;
}

class VideoTrimmer extends Component<VideoTrimmerProps, VideoTrimmerState> {
  constructor(props: VideoTrimmerProps) {
    super(props);
    this.state = {
      start: 0,
      end: 0,
    };
  }

  handleStartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const start = Number(event.target.value);
    this.setState({ start });
  };

  handleEndChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const end = Number(event.target.value);
    this.setState({ end });
  };

  handleTrim = () => {
    const { start, end } = this.state;
    this.props.onTrim(start, end);
  };

  render() {
    return (
      <div className="video-trimmer">
        <h2>Trim Video</h2>
        <label>
          Start Time (seconds):
          <input type="number" value={this.state.start} onChange={this.handleStartChange} />
        </label>
        <label>
          End Time (seconds):
          <input type="number" value={this.state.end} onChange={this.handleEndChange} />
        </label>
        <button onClick={this.handleTrim}>Trim</button>
      </div>
    );
  }
}

export default VideoTrimmer;