'use client';
import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@tremor/react';
import Link from 'next/link';
import Tomato from './logos/Tomato';
import { getSessionUsername, signOut } from '@/lib/actions';
import { AuthError } from '@supabase/supabase-js';
import { useRouter } from 'next/navigation';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // isLoggedIn関数を非同期で実行
    const checkLoggedIn = async () => {
      const fetchedUsername = await getSessionUsername();
      setLoggedInUser(fetchedUsername);
    };
    checkLoggedIn();
  }, []);

  const pathname = usePathname();

  const handleSignOut = async () => {
    const isSignOutError: AuthError | null = await signOut();
    if (isSignOutError) {
      console.log('This is Auth error');
    } else {
      setLoggedInUser(null);
      router.push('/login');
    }
  };

  const navigation = [
    { name: 'ポモドーロ!', href: '/' },
    { name: 'ランキング', href: '/ranking' },
    { name: '登録', href: '/register' },
    ...(loggedInUser
      ? [{ name: 'マイページ', href: '/mypage' }]
      : [{ name: 'ログイン', href: '/login' }]),
  ];
  return (
    <div className="backdrop-blur sticky top-0 shadow-sm bg-green-200/50 border border-green-200 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Tomato size={36} color="red" />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    pathname === item.href
                      ? 'border-red-600 text-red-600'
                      : 'border-transparent text-gray-400 hover:text-red-500 hover:border-red-300',
                    'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
                  )}
                  aria-current={pathname === item.href ? 'page' : undefined}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="pt-5 pr-5">{loggedInUser}</div>
            <div className="pt-3">
              {loggedInUser ? (
                <Button
                  className="bg-red-500 border-red-500 font-semibold leading-6 text-white shadow-sm hover:bg-red-400 hover:border-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
                  onClick={handleSignOut}
                >
                  ログアウト
                </Button>
              ) : (
                <Button className="bg-red-500 border-red-500 font-semibold leading-6 text-white shadow-sm hover:bg-red-400 hover:border-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  <Link href="/login">ログイン</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
