"use client";

import { useState } from "react";

export default function FeedContainer() {
    const [title] = useState('NYT Feed');
    const [newspaper, setNews] = useState([]);
    const [errorResponse, setError] = useState(null);

    function fetchNews() {

    };

    return (
        <div className="feed-container">
            <button onClick={fetchNews} className="fetch-button"><b>Fetch News</b></button>
        </div>
    );
}