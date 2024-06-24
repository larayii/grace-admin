import "./nova.scss"
// import style from "./nova.module.scss"

export function Nova() {
    return (
        <div className="nova">
            <div className="signup-space">
                <div className="signup-stars"></div>
                <div className="signup-stars"></div>
                <div className="signup-stars"></div>
                <div className="signup-stars"></div>
                <div className="signup-stars"></div>
                <div className="signup-stars"></div>
            </div>
            <img src="/images/start.svg" alt="" />
            {/* <div
                style={{
                    height: '100vh',
                    width: '100vw',
                    // backgroundSize: 380,
                    backgroundImage: 'url(/images/start.svg)'
                }}
            /> */}
        </div>
    )
}