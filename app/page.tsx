import App from '../src/App.jsx';
import { getAuthUser } from '@/src/server/auth';
import { redirect } from 'next/navigation';

export default async function Home() {
  const user = await getAuthUser();
  if (!user) redirect('/login');
  return <App />;
}
