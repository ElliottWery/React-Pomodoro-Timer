import React from "react";
import {minutesToDuration, secondsToDuration} from  "../utils/duration";

function Progress({session, focusDuration, breakDuration}) {
    let progress = 0;
  if (session) {
    progress = (1 - session.timeRemaining / ((session.label === "Focusing"? focusDuration : breakDuration) * 60)) * 100;
  }
    return(
        <div>
        {session && (
        <div>
        <div className="row mb-2">
          <div className="col">
            <h2 data-testid="session-title">
              {session?.label} for {minutesToDuration(session.label === "Focusing"? focusDuration : breakDuration)} minutes
            </h2>
            <p className="lead" data-testid="session-sub-title">
              {secondsToDuration(session?.timeRemaining)} remaining
            </p>
          </div>
        </div>
      
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow={progress}
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </div>
      )}
      </div>
    )
}

export default Progress;