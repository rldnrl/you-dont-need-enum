import Music from '@/types/music'
import styles from './button.module.css'

type ButtonProps = {
  music: Music
}

const Button = ({ music }: ButtonProps) => {
  switch (music) {
    case Music.Classic:
      return <button className={styles.classic}>클래식</button>
    case Music.Jazz:
      return <button className={styles.jazz}>재즈</button>
    case Music.Rock:
      return <button className={styles.rock}>락</button>
  }
}

export default Button
