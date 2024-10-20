import React, { useEffect } from 'react';
import './GoogleTrends.css';

const GoogleTrends = () => {
    useEffect(() => {
        const loadGoogleTrends = () => {
            const script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = 'https://ssl.gstatic.com/trends_nrtr/3826_RC01/embed_loader.js';
            script.onload = () => {
                window.trends.embed.renderExploreWidget("GEO_MAP", {
                    comparisonItem: [
                        {
                            keyword: "Deepfake",
                            geo: "",
                            time: "today 12-m"
                        }
                    ],
                    category: 0,
                    property: ""
                }, {
                    exploreQuery: "q=deepfake&hl=ko&date=today 12-m",
                    guestPath: "https://trends.google.co.kr:443/trends/embed/"
                });

                window.trends.embed.renderExploreWidget("TIMESERIES", {
                    comparisonItem: [
                        {
                            keyword: "deepfake",
                            geo: "",
                            time: "today 12-m"
                        }
                    ],
                    category: 0,
                    property: ""
                }, {
                    exploreQuery: "q=deepfake&hl=ko&date=today 12-m",
                    guestPath: "https://trends.google.co.kr:443/trends/embed/"
                });
            };
            document.body.appendChild(script);
        };
        loadGoogleTrends();
        return () => {
            const scriptElements = document.querySelectorAll('script[src="https://ssl.gstatic.com/trends_nrtr/3826_RC01/embed_loader.js"]');
            scriptElements.forEach(script => script.remove());
        };
    }, []);

    const handleGoBack = () => {
        window.history.back();
    };

    return (
        <div>
            <h1>딥페이크에 대한 관심도</h1>
            <div className='map' id="geo-map"></div>
            <div className='time' id="time-series"></div>
            <button onClick={handleGoBack}>뒤로가기</button>
        </div>
    );
};

export default GoogleTrends;