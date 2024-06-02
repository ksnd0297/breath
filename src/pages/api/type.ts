/**
 * result : 조회 결과
 * cur_unit : 통화코드
 * cur_nm : 국가/통화명
 * ttb : 전신환(송금) 받으실때
 * tts : 전신환(송금) 보내실때
 * deal_bas_r : 매매 기준율
 * bkpr : 장부가격
 * yy_efee_r : 년환가료율
 * ten_dd_efee_r : 10일환가료율
 * kftc_deal_bas_r : 서울외국환중개매매기준율
 * kfrtc_bkpr : 서울외국환중개장부가격
 */
export type ForeignResponse = {
    data: ForeignInfo[];
};

export type ForeignInfo = {
    result?: number;
    cur_unit?: string;
    cur_nm?: string;
    ttb?: string;
    tts?: string;
    deal_bas_r?: string;
    bkpr?: string;
    yy_efee_r?: string;
    ten_dd_efee_r?: string;
    kftc_deal_bas_r?: string;
    kftc_bkpr?: string;
};
