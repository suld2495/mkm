import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCustomer from "../../hooks/useCustomer";
import { useSetRecoilState } from "recoil";
import { modalState } from "../../store/modal";

const CounselingForm = () => {
  const setModal = useSetRecoilState(modalState);
  const navigate = useNavigate();
  const saveEstimate = useCustomer();
  const {
    handleSubmit,
    register,
    setError,
    setFocus,
    formState: { errors }
  } = useForm({ mode: 'onChange' });

  const submit = async (data) => {
    if (data.product?.includes?.('기타') && !data.productText) {
      setError('productText', {});
      setFocus('productText');
      return;
    }
    
    try {
      await saveEstimate.saveCounseling.mutateAsync(data);
      alert('저장되었습니다.');
      navigate('/customer/counseling');
    } catch {
      alert('문제가 발생하였습니다. 다시 이용해주시기 바랍니다.');
    }
  };

  const openPopup = () => {
    setModal(true);
  }

  return (
    <div className="form wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="0.3s">
      <form onSubmit={handleSubmit(submit)}>
        <div className="form-item">
          <label className="label">회사명</label>
          <div className="input">
            <input type="text" {...register('company', { required: true })} placeholder="회사명을 입력해 주세요." />
            {errors.company && <div className="errors">회사명을 입력해 주세요.</div>}
          </div>
        </div>
        <div className="row">
          <div className="form-item">
            <label className="label">담당자명</label>
            <div className="input">
              <input type="text" {...register('name', { required: true })} placeholder="담당자명을 입력해 주세요." />
              {errors.name && <div className="errors">담당자명을 입력해 주세요.</div>}
            </div>
          </div>
          <div className="form-item">
            <label className="label">연락처</label>
            <div className="input">
              <input type="text" {...register('phone', { required: true })} placeholder="연락처를 입력해 주세요." />
              {errors.phone && <div className="errors">연락처를 입력해 주세요.</div>}
            </div>
          </div>
        </div>
        <div className="form-item email">
          <label className="label">이메일</label>
          <div>
            <div className="input">
              <input type="text" {...register('email1', { required: true })} placeholder="이메일을 입력해 주세요." />
              <span>@</span>
              <select {...register('email2', { required: true })}>
                <option>선택해주세요.</option>
                <option>1</option>
              </select>
            </div>
            {(errors.email1 || errors.email2) && <div className="errors">이메일을 입력해 주세요.</div>}
          </div>
        </div>
        <div className="form-item checkbox">
          <label className="label">
            상품정보<br/>
            (중복선택 가능)
          </label>
          <div className="input">
            <label><input {...register('product')} type="checkbox" value="의류" />의류</label>
            <label><input {...register('product')} type="checkbox" value="뷰티" />뷰티</label>
            <label><input {...register('product')} type="checkbox" value="생활" />생활</label>
            <label><input {...register('product')} type="checkbox" value="주방" />주방</label>
            <label><input {...register('product')} type="checkbox" value="유아" />유아</label>
            <label><input {...register('product')} type="checkbox" value="헬스" />헬스</label>
            <label><input {...register('product')} type="checkbox" value="애견" />애견</label>
            <label><input {...register('product')} type="checkbox" value="전자" />전자</label>
            <label>
              <input {...register('product')} type="checkbox" value="기타" />기타
              <input {...register('productText')} type="text" />
              {errors.productText && <div className="errors">입력해주세요.</div>}
            </label>
          </div>
        </div>
        <div className="form-item">
          <label className="label">
            상담내용
          </label>
          <div className="input">
            <textarea {...register('content', { required: true })} placeholder="문의하실 내용을 입력해 주세요." />
            {errors.content && <div className="errors">문의하실 내용을 입력해 주세요.</div>}
          </div>
        </div>
        <div className="form-item agree">
          <label className="label">
            개인정보처리방침
          </label>
          <div className="input">
            <div>
              <button type="button" onClick={openPopup}>약관 확인하기</button>
              <div>
                <input id="agree" {...register('agree', { required: true })} type="checkbox" />
                <label htmlFor="agree" />
                <p>개인정보 수집 및 이용에 동의합니다.</p>
              </div>
            </div>
            {errors.agree && <div className="errors">약관에 동의해주세요.</div>}
          </div>
        </div>
        <button type="submit">문의하기</button>
      </form>
    </div>
  )
};

export default CounselingForm;