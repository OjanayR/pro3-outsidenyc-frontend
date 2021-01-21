import './Footer.css';

export default function Footer(props) {
    return (
        <footer className="Footer">
            <p>Copyright &copy; Outside NYC {new Date().getFullYear()} All Rights Reserved</p>
        </footer>
    );
}