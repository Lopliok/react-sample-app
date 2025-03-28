import { Link, Toast, ToastBody, ToastFooter, ToastTitle } from '@fluentui/react-components';

export const ToastComponent = ({ title, description }: { title: string; description: string }) => {
  return (
    <Toast>
      <ToastTitle action={<Link>Undo</Link>}>{title}</ToastTitle>
      <ToastBody>{description}</ToastBody>
      <ToastFooter />
    </Toast>
  );
};
