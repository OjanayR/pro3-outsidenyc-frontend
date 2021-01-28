import './Footer.css';

export default function Footer(props) {
    return (
        <footer className="Footer">
            <p>Copyright &copy; Temp Moodboard {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
}