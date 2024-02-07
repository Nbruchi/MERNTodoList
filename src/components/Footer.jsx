import { useStoreState } from "easy-peasy";
const Footer = () => {
      const year = new Date().getFullYear();
      const taskCount = useStoreState((state) => state.taskCount);
      return (
            <footer className="Footer">
                  <p style={{ textAlign: "center" }}>
                        {taskCount} {taskCount > 1 ? "Tasks" : "Task"}
                  </p>
                  <p>Copyright &copy; {year} Bruce Inc.</p>
            </footer>
      );
};

export default Footer;
