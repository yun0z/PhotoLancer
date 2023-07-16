import logo1 from '../image/심볼.png';
import logo2 from '../image/로고.png';

const Onboarding = () => {
  return (
    <div className="onboarding">
      <div className="ob_1">
        <div>
          <img src={logo1} className="symbol" />
          <img src={logo2} className="logo" />
        </div>
        <button>Log in</button>
      </div>
      <div className="ob_2">
        반응형 이미지
      </div>
    </div>
  );
};
export default Onboarding;
