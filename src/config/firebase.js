// Firebase SDKs 및 개별 서비스 모듈 가져오기
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase 설정값
const firebaseConfig = {
  apiKey: 'AIzaSyCZqmOw4o4wmxRC4gBHPFtd0gSWlXPpZCk',
  authDomain: 'mysportsthin.firebaseapp.com',
  projectId: 'mysportsthin',
  storageBucket: 'mysportsthin.appspot.com',
  messagingSenderId: '1050289497693',
  appId: '1:1050289497693:web:19c3d361d3c4a0f1e94fb4',
  measurementId: 'G-ZXJPLKRKTZ',
};

// Firebase 앱 초기화
const app = initializeApp(firebaseConfig);

// Firestore 참조 가져오기
const db = getFirestore(app);

export { db };
