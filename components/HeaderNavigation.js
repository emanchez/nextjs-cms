import styles from './HeaderNavigation.module.css'

export default function HeaderNavigation(){
    return (
        <div className={styles.nav_wrap}>
            <div className={styles.nav}>
                <span onclick="">Home</span>
                <span>Gallery</span>
                <span>Shop</span>
                <span>Super Saiyan Shop</span>
            </div>
        </div>
    )
}