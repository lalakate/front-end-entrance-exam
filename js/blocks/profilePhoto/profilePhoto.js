import './profile-photo.css'
import profilePhoto from '/profilePhoto/profileImg.png'
export function createProfilePhotoBlock() {
  return `
    <section class='profile-photo'>
        <img src='${profilePhoto}' alt='profile photo' loading=lazy/>
    </section>`
}
