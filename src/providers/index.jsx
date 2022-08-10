import { ApiGitProvider } from "./ApiGit";
import { WindowProvider } from "./window";

const Provider = ({ children }) => {
  return (
    <WindowProvider>
      <ApiGitProvider>{children}</ApiGitProvider>
    </WindowProvider>
  );
};
export default Provider;
