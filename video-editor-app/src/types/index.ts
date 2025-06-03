export interface Video {
    id: string;
    title: string;
    duration: number; // in seconds
    fileUrl: string;
}

export interface Filter {
    id: string;
    name: string;
    apply: (video: Video) => Video; // function to apply the filter to a video
}