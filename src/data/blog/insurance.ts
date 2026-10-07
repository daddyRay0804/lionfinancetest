import type { BlogPost } from "./types";

export const insurancePosts: BlogPost[] = [
  {
    slug: "house-insurance-before-buying-nz",
    date: "2026-10-07",
    category: "property",
    image: "house-insurance",
    service: "home-loans",
    related: ["home-loan-pre-approval", "auction-finance-checklist"],
    sources: [
      { name: "Settled: Property buyers and insurance", url: "https://www.settled.govt.nz/blog/what-property-buyers-need-to-know-about-insurance/" },
      { name: "Natural Hazards Commission: Buying or selling a home with previous claims", url: "https://www.naturalhazards.govt.nz/insurance-and-claims/claims/buying-or-selling-a-home-with-previous-claims/" },
    ],
    copy: {
      en: {
        title: "House insurance before buying in NZ: four checks before you commit",
        description: "Check house insurance availability, policy terms, previous natural hazard claims and settlement evidence before committing to a home purchase in New Zealand.",
        alt: "Illustrative weatherboard home with a downpipe, grated drain and wet path after rain",
        body: `Insurance deserves its own place in your purchase plan, alongside the mortgage and legal checks. This guide focuses on the information to collect and the questions to allocate to each professional, rather than recommending a policy. A tidy exterior alone cannot establish that a property is insurable.

## Ask about this address, not just a premium
Settled advises buyers to investigate insurance early: lenders usually require evidence of cover before settlement. Request confirmation for the specific property, including any exclusions, rather than relying on the seller's existing policy or an online price.

Keep three questions separate in your notes: is the insurer still assessing the property, what cover is being offered, and has the lender accepted the evidence? Ask your insurance provider, lender and lawyer who needs to confirm each answer. Our [pre-approval guide](/blog/home-loan-pre-approval) explains why a borrowing limit is not the same as approval of a particular purchase.

## Investigate previous damage and repairs
The Natural Hazards Commission says a missing claims record does not prove a home has never suffered damage. If a claim exists, request repair evidence and have your lawyer check any claim transfer; a settled claim alone does not establish that repairs were completed.

Create a short issue list with a document, responsible person and next action for each unanswered question. For example, an absent repair invoice should remain an open question, not become a tick simply because someone says the work looks finished. This is an organisational example, not a finding about any property. Let appropriate specialists assess the evidence.

## Compare what you would have to fund yourself
Use a comparison sheet to ask each insurer about the premium, excess, exclusions, cover limits and assumptions. Ask how the proposed sum insured was established. Note any questions the provider has not yet answered rather than guessing that two offers are equivalent.

Then add a separate household question: what cash would remain for an excess or an expense outside cover? Keep that discussion distinct from whether a lender accepts the policy. An offer of insurance is not a building inspection or a promise that owning the home will be affordable.

## Close the loop before the next purchase deadline
Ask your lawyer when cover needs to begin under your agreement and have the insurer confirm the start date. Use a final handover list:
- Insurer: confirm the property, policy details and outstanding requirements.
- Lender: confirm which insurance evidence it needs and whether it is acceptable.
- Lawyer: explain contractual deadlines and any unresolved claim documentation.
- Buyer: keep the confirmations together and flag changes promptly.

For an auction, review the [auction finance checklist](/blog/auction-finance-checklist) before bidding. Our [home loan team](/products/home-loans) can help coordinate lending requirements; obtain insurance and legal advice from the appropriate professionals. Do not treat unanswered insurance questions as approval to proceed.`,
      },
      zh: {
        title: "新西兰买房保险：作出购房承诺前的四项核查",
        description: "买房前核实具体房产能否投保、保险条款、自然灾害理赔及维修记录，并协调银行和律师所需的交割证明。",
        alt: "雨后木板外墙住宅的示意配图，可见落水管、格栅排水口和湿润步道",
        body: `保险应与房贷、法律核查一起列入购房计划。本文重点是需要收集哪些信息、应由哪位专业人士回答问题，并不推荐具体保单。房屋外观看起来整洁，并不能证明它一定可以投保。

## 核实具体地址，而不只是询问保费
Settled 建议买家提前了解保险，因为贷款机构通常会在交割前要求提供承保证明。请针对具体房产取得确认，包括除外责任，不要只依赖卖家的现有保单或网上报价。

在记录中区分三个问题：保险公司是否仍在评估房产？实际愿意提供哪些保障？银行是否接受相关证明？向保险提供商、银行及律师明确每个答案需要由谁确认。我们的[贷款预批指南](/blog/home-loan-pre-approval)解释了为什么借款额度不等于银行已经认可某一笔购房交易。

## 调查以往损坏及维修情况
自然灾害委员会指出，没有理赔记录不代表房屋从未受损。如果存在理赔，请索取维修证明，并让律师核查理赔权益转让事宜；理赔已经结案，本身不能证明维修已经完成。

为每个未解决的问题记录对应文件、负责人和下一步。例如，缺少维修发票仍应列为待确认事项，不能仅凭有人说维修看起来已完成就标记通过。这只是整理信息的示例，并非对任何具体房产的判断。证据应交由适当的专业人士评估。

## 比较哪些费用需要自己承担
用一张对照表向各保险公司询问保费、自付额、除外责任、保障限额及报价假设，并询问拟定的保额是如何确定的。尚未得到回答的问题应明确标注，不要自行假定两份报价的保障相同。

再单独检查家庭资金：发生自付额支出或保障范围外的费用时，还剩多少现金？这与银行是否接受保单是不同的问题。保险公司愿意承保，不等于完成了建筑检查，也不代表持有这套房子的成本一定可以负担。

## 在下一个购房截止日前完成确认
请律师根据合同解释保险需要何时生效，再由保险公司确认起保日期。最后按以下清单完成信息交接：
- 保险公司：确认房产、保单细节和仍需满足的要求。
- 银行：确认需要哪些保险证明，以及是否接受这些证明。
- 律师：解释合同截止时间，以及尚未解决的理赔文件问题。
- 买家：集中保存确认文件，出现变化时及时告知相关人员。

若通过拍卖购房，请在竞拍前阅读[拍卖融资清单](/blog/auction-finance-checklist)。我们的[房贷团队](/products/home-loans)可以协助协调贷款要求；保险与法律建议应向相应专业人士获取。保险问题尚未得到回答，不能视为可以继续交易的批准。`,
      },
      kr: {
        title: "뉴질랜드 주택 구매 전 보험: 계약 전에 확인할 네 가지",
        description: "뉴질랜드 주택 구매 전 보험 가입 가능 여부, 보장 조건, 자연재해 청구와 수리 기록, 잔금 결제에 필요한 증빙을 확인하세요.",
        alt: "비가 온 뒤 빗물 배수관, 격자 배수구와 젖은 보도가 보이는 목재 외장 주택의 예시 이미지",
        body: `보험도 모기지와 법률 검토처럼 주택 구매 계획에 별도 항목으로 넣어야 합니다. 이 글은 특정 보험을 추천하는 대신 어떤 정보를 모으고 어느 전문가에게 질문할지 설명합니다. 외관이 깔끔하다는 사실만으로 보험 가입 가능 여부를 판단할 수는 없습니다.

## 보험료뿐 아니라 해당 주소의 인수 여부를 확인하세요
Settled는 금융기관이 보통 잔금 결제 전에 보험 증빙을 요구하므로 미리 알아보라고 안내합니다. 매도인의 기존 보험이나 온라인 견적에만 의존하지 말고, 해당 주택에 대해 보장 제외 사항을 포함한 확인을 받으세요.

기록에는 세 질문을 구분하세요. 보험사가 아직 주택을 심사 중인가요? 실제로 어떤 보장을 제시하나요? 금융기관이 그 증빙을 수용했나요? 보험 제공사, 금융기관과 변호사에게 각 답변을 누가 확인해야 하는지 물어보세요. [대출 사전 승인 가이드](/blog/home-loan-pre-approval)는 대출 한도와 특정 구매의 승인이 왜 다른지 설명합니다.

## 과거 피해와 수리 이력을 조사하세요
자연재해위원회는 청구 기록이 없다고 해서 피해를 입은 적이 없다는 뜻은 아니라고 설명합니다. 청구 이력이 있다면 수리 증빙을 요청하고 변호사에게 청구 권리 이전을 확인받으세요. 청구가 종결됐다는 사실만으로 수리가 완료됐다고 볼 수 없습니다.

미해결 질문마다 관련 서류, 담당자와 다음 조치를 적으세요. 예를 들어 수리 영수증이 없다면 누군가 공사가 끝난 것 같다고 말하더라도 확인이 필요한 항목으로 남겨 두세요. 이는 정보 정리 방법의 예시이며 특정 주택에 대한 판단이 아닙니다. 증빙 평가는 적절한 전문가에게 맡기세요.

## 직접 부담해야 할 비용을 비교하세요
비교표를 만들어 각 보험사에 보험료, 자기부담금, 보장 제외 사항, 보장 한도와 견적의 전제조건을 물어보세요. 제안된 보험가입금액이 어떻게 산정됐는지도 확인하세요. 두 견적이 동일한 보장을 제공한다고 추측하지 말고, 아직 답변을 받지 못한 질문을 표시하세요.

그다음 가계에 관한 별도 질문을 하세요. 자기부담금이나 보장 밖의 비용을 내야 한다면 현금이 얼마나 남을까요? 이는 금융기관이 보험을 수용하는지와 다른 문제입니다. 보험 가입 제안은 건물 검사를 대신하지 않으며, 주택 보유 비용을 감당할 수 있다는 보장도 아닙니다.

## 다음 구매 기한 전에 확인을 마무리하세요
계약상 보장이 언제 시작돼야 하는지 변호사에게 묻고 보험사에 개시일을 확인받으세요. 마지막으로 다음 목록에 따라 정보를 전달하세요.
- 보험사: 해당 주택, 보험 세부 내용과 남은 요구사항을 확인합니다.
- 금융기관: 필요한 보험 증빙과 그 수용 여부를 확인합니다.
- 변호사: 계약 기한과 미해결 청구 서류 문제를 설명합니다.
- 구매자: 확인 내용을 한곳에 보관하고 변경사항을 신속히 알립니다.

경매라면 입찰 전에 [경매 자금 체크리스트](/blog/auction-finance-checklist)를 검토하세요. [주택 대출팀](/products/home-loans)은 대출 요건 조율을 도울 수 있습니다. 보험과 법률 자문은 해당 전문가에게 받으세요. 답변이 없는 보험 문제를 거래 진행 승인으로 받아들이지 마세요.`,
      },
    },
  },
];
