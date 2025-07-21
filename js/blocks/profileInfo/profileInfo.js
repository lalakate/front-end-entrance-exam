import './profile-info.css'

const profileInfo = {
  name: 'Karthik SR',
  job: 'UX/UI Designer'
}

export function createProfileInfoBlock() {
  return `
        <section class='profile-info extra-bg section'>
            <h3 contenteditable data-key='profile-description'>Hello 👋🏻 I’m</h3>
            <div class='profile-name-job'>
                <p contenteditable data-key='name.fullname' class='profile-name'>${profileInfo.name}</p>
                <p contenteditable data-key='name.job' class='profile-job subtitle-1'>${profileInfo.job}</p>
            </div>
        </section>`
}
