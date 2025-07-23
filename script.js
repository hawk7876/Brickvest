document.addEventListener('DOMContentLoaded', () => {

    // --- 1. 언어 팩 정의 ---
    const languageStrings = {
        en: {
            // 네비게이션
            nav_investments: "Investments",
            nav_about: "How it Works",
            nav_why: "Why Brickvest",
            nav_login: "Login",
            nav_signup: "Sign Up",
            // 히어로
            hero_title: "The New Standard in Global Real Estate Investment",
            hero_subtitle: "Access curated global real estate investment opportunities and diversify your portfolio.",
            hero_cta: "View Opportunities",
            // 프로세스
            process_title: "How Brickvest Works",
            process1_title: "1. Discover Opportunities",
            process1_desc: "Easily browse and compare various real estate investment products from around the world.",
            process2_title: "2. Analyze & Due Diligence",
            process2_desc: "Access reliable investment information verified and evaluated by our team of experts.",
            process3_title: "3. Invest with Ease",
            process3_desc: "Participate in investments and build your portfolio through various simple methods.",
            process4_title: "4. Manage Your Portfolio",
            process4_desc: "Monitor your asset status at a glance with transparent and systematic reports.",
            // 투자 상품
            investments_title: "Featured Investments",
            yield: "Expected Yield:",
            term: "Term:",
            min_investment: "Min. Investment:",
            investment1_title: "[Fund] European Commercial Real Estate Portfolio",
            investment2_title: "[Direct] London Prime Luxury Residence",
            investment3_title: "[Club Deal] German Logistics Warehouse Development",
            details_btn: "View Details",
            view_all_btn: "View All Investments",
            // 푸터
            footer_disclaimer: "Brickvest is a platform that provides investment advisory and brokerage services. The responsibility for the investment lies with the investor."
        },
        ko: {
            // 네비게이션
            nav_investments: "투자 기회",
            nav_about: "플랫폼 소개",
            nav_why: "Why Brickvest",
            nav_login: "로그인",
            nav_signup: "회원가입",
            // 히어로
            hero_title: "전 세계 부동산 투자의 새로운 기준, Brickvest",
            hero_subtitle: "엄선된 글로벌 부동산 투자 기회에 접근하고, 포트폴리오를 다각화하세요.",
            hero_cta: "투자 기회 보기",
            // 프로세스
            process_title: "Brickvest 투자 프로세스",
            process1_title: "1. 투자 기회 탐색",
            process1_desc: "전 세계의 다양한 부동산 투자 상품을 쉽고 빠르게 비교 분석하세요.",
            process2_title: "2. 투자 분석 및 실사",
            process2_desc: "전문 팀이 검증하고 평가한 신뢰할 수 있는 투자 정보에 접근하세요.",
            process3_title: "3. 간편한 투자 실행",
            process3_desc: "다양한 방식으로 손쉽게 투자에 참여하고 포트폴리오를 구성하세요.",
            process4_title: "4. 포트폴리오 관리",
            process4_desc: "투명하고 체계적인 리포트를 통해 자산 현황을 한눈에 파악하세요.",
            // 투자 상품
            investments_title: "추천 투자 상품",
            yield: "예상 수익률:",
            term: "투자기간:",
            min_investment: "최소 투자금액:",
            investment1_title: "[펀드] 유럽 상업용 부동산 포트폴리오",
            investment2_title: "[직접] 런던 중심가 럭셔리 레지던스",
            investment3_title: "[클럽딜] 독일 물류창고 개발 프로젝트",
            details_btn: "상세 보기",
            view_all_btn: "모든 투자 상품 보기",
            // 푸터
            footer_disclaimer: "Brickvest는 투자 자문 및 중개 서비스를 제공하는 플랫폼입니다. 투자에 대한 책임은 투자자 본인에게 있습니다."
        }
    };

    // --- 2. 언어 변경 함수 ---
    const changeLanguage = (lang) => {
        document.querySelectorAll('[data-lang-key]').forEach(element => {
            const key = element.getAttribute('data-lang-key');
            if (languageStrings[lang][key]) {
                element.textContent = languageStrings[lang][key];
            }
        });
        
        // HTML 문서의 lang 속성도 변경 (검색엔진 최적화 및 접근성에 좋음)
        document.documentElement.lang = lang;
    };

    // --- 3. 이벤트 리스너 설정 ---
    const langButtons = document.querySelectorAll('.lang-btn');
    
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Active 클래스 관리
            langButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // 언어 변경 함수 호출
            const selectedLang = button.getAttribute('data-lang');
            changeLanguage(selectedLang);
        });
    });

    // --- 4. 초기 언어 설정 ---
    // 브라우저의 기본 언어를 확인하거나, 기본값(ko)으로 설정
    const initialLang = navigator.language.startsWith('ko') ? 'ko' : 'ko';
    document.querySelector(`.lang-btn[data-lang="${initialLang}"]`).click();

});