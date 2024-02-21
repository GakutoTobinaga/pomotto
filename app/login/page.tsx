'use client';
import { redirect } from 'next/navigation';
import Tomato from '@/components/logos/Tomato';
import { signIn } from '@/lib/actions';
import toast from 'react-hot-toast';

export default function Login() {
  async function signInButton(formData: FormData) {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const isLoggedIn: boolean = await signIn(email, password);
    if (isLoggedIn) {
      toast.success('ログインしました。');
      redirect('/');
    } else {
      toast.error('ログインに失敗しました。');
      redirect('/login');
    }
  }

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="w-full max-w-md overflow-hidden rounded-2xl border border-red-100 shadow-xl">
          <div className="pt-10 flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-red-50">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex justify-center">
                <Tomato size={128} color="red" />
              </div>
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                ログインしてポモドーロしましょう。
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action={signInButton}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    メールアドレス
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      パスワード
                    </label>
                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-semibold text-indigo-600 hover:text-indigo-500"
                      >
                        パスワードを忘れました。
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="text"
                      autoComplete="current-password"
                      required
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    ログイン
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
