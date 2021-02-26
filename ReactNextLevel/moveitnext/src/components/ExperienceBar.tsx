export function ExperienceBar() {
    return (
        <header className="experience-bar">
            <span>0 XP</span>
            <div>
                <div style={{ width: '50%' }} />

                <span className='current-xp' style={{ left: '50%' }}>
                    300xp
                </span>
            </div>
            <span>600 XP</span>
        </header>
    );
}