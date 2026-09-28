import type { BlogPost } from "./types";

export const mortgagePosts: BlogPost[] = [
  {
    slug: "fixed-or-floating-mortgage", date: "2026-03-27", category: "mortgage", image: "fixed-floating", service: "home-loans", related: ["mortgage-refix-checklist", "offset-and-revolving-credit"],
    sources: [{ name: "Sorted: Mortgage types in New Zealand", url: "https://sorted.org.nz/guides/home-buying/mortgage-types/" }],
    copy: {
      en: { title: "Fixed or floating mortgage? Start with your plans", description: "Compare fixed, floating and split mortgage structures in New Zealand by matching repayment certainty and flexibility to your plans.", alt: "Two neighbouring townhouse doors representing different mortgage choices", body: `Choosing a mortgage structure is not just a prediction about the next interest-rate move. It is a decision about the certainty and flexibility you need while repaying a long-term debt.

## What fixed and floating change
A fixed rate applies for an agreed period, which helps with budgeting. A floating rate can change and usually offers more repayment flexibility. Early repayment restrictions and charges depend on the loan contract; check them before assuming you can move or repay without cost.

The fixed-rate period is different from the overall loan term. Fixing for a shorter period does not mean the whole mortgage must be repaid at its expiry.

## Map decisions you already know about
List likely events over the next few years: moving, parental leave, a renovation, a bonus or a change in employment. A household expecting a lump sum may value different features from one prioritising an unchanging payment. Do not borrow more simply because one structure produces a lower initial payment.

## Consider a split without assuming it is better
Dividing the loan can give different portions different repayment features or expiry dates. It also creates more dates to manage and can complicate a future lender switch. Ask for a simple written schedule showing each balance, payment, rate period and any relevant fees.

## Compare like for like
- Use the same total balance and remaining loan term.
- Check repayments under more than one rate scenario.
- Identify the cost of planned extra payments or an early move.
- Keep an emergency buffer outside the decision.

Our [home loan service](/products/home-loans) can help you compare structures. If an existing fixed period is ending, use the [refix checklist](/blog/mortgage-refix-checklist) to prepare the discussion.` },
      zh: { title: "固定还是浮动利率？先从您的计划出发", description: "比较新西兰固定、浮动及分拆房贷结构，根据还款确定性、灵活性和未来计划选择适合的安排。", alt: "两扇相邻住宅门，表达不同房贷结构的选择", body: `选择房贷结构不只是预测下一次利率涨跌，更是决定在偿还长期债务时，自己需要多少确定性和灵活性。

## 固定与浮动改变了什么
固定利率在约定期间内适用，便于安排预算。浮动利率可能变化，通常提供较大的还款灵活性。提前还款限制和费用取决于合同，不能假设转贷或提前还款一定没有成本。

固定利率期限与整笔贷款年限不同。选择较短固定期，并不意味着到期时须清偿全部房贷。

## 列出已经可以预见的变化
考虑未来几年可能搬家、育儿假、装修、奖金或换工作等情况。预计收到一笔资金的家庭，与优先追求还款稳定的家庭，需求可能不同。不要仅因某种结构最初月供较低就增加借款。

## 分拆可以考虑，但并非总是更好
分拆贷款可让不同部分拥有不同到期日或还款功能，但需要管理更多日期，也可能使日后换银行更复杂。请顾问用书面表格列明各部分余额、还款额、固定期及相关费用。

## 使用相同基础进行比较
- 保持贷款总额与剩余年限一致。
- 测算多种利率情景下的还款。
- 核实额外还款或提前搬家的成本。
- 在方案之外保留应急资金。

我们的[房贷服务](/products/home-loans)可帮助比较结构。现有固定期即将结束时，可先阅读[利率重定清单](/blog/mortgage-refix-checklist)。` },
      kr: { title: "고정금리와 변동금리: 먼저 생활 계획을 살펴보세요", description: "뉴질랜드 고정, 변동 및 분할 모기지를 상환 안정성, 유연성과 향후 생활 계획에 맞춰 비교해 보세요.", alt: "서로 다른 대출 선택을 상징하는 나란한 주택 출입문", body: `모기지 구조 선택은 다음 금리 변화를 맞히는 일이 아닙니다. 장기 부채를 갚는 동안 필요한 안정성과 유연성을 정하는 결정입니다.

## 고정과 변동의 차이
고정금리는 약정 기간 동안 적용되어 예산 수립에 도움이 됩니다. 변동금리는 바뀔 수 있으며 보통 상환 유연성이 더 큽니다. 중도상환 제한과 비용은 계약에 따라 다르므로 무료로 상환하거나 이전할 수 있다고 가정하지 마세요.

고정금리 기간은 전체 대출 기간과 다릅니다. 짧게 고정한다고 그 기간이 끝날 때 전체 대출을 상환해야 하는 것은 아닙니다.

## 예상되는 생활 변화를 적어 보세요
이사, 육아휴직, 리노베이션, 보너스 또는 직장 변경을 고려하세요. 목돈이 들어올 가구와 일정한 상환액을 우선하는 가구는 필요한 기능이 다를 수 있습니다. 초기 상환액이 낮다는 이유로 더 많이 빌리지 마세요.

## 분할이 항상 더 나은 것은 아닙니다
대출을 나누면 서로 다른 상환 기능이나 만료일을 설정할 수 있습니다. 하지만 관리할 날짜가 늘고 나중에 은행을 바꾸기 복잡해질 수 있습니다. 각 잔액, 상환액, 금리 기간과 비용을 보여 주는 서면 일정을 요청하세요.

## 같은 조건으로 비교하세요
- 총잔액과 남은 대출 기간을 동일하게 설정합니다.
- 여러 금리 상황에서 상환액을 계산합니다.
- 추가 상환이나 이사 시 발생할 비용을 확인합니다.
- 비상자금을 별도로 남깁니다.

[주택 대출 서비스](/products/home-loans)에서 구조를 비교할 수 있습니다. 고정 기간이 끝난다면 [금리 재설정 체크리스트](/blog/mortgage-refix-checklist)를 먼저 확인하세요.` },
    },
  },
  {
    slug: "mortgage-refix-checklist", date: "2026-05-21", category: "mortgage", image: "refix", service: "interest-rate-refix", related: ["fixed-or-floating-mortgage", "refinance-total-costs"],
    sources: [{ name: "ANZ: When a fixed home loan rate ends", url: "https://www.anz.co.nz/personal/home-loans-mortgages/manage/fixed-rate-roll-over/" }],
    copy: {
      en: { title: "Your mortgage refix checklist before the fixed rate ends", description: "Prepare for a mortgage refix in NZ: review expiry dates, repayments, upcoming plans and the difference between refixing and refinancing.", alt: "Desk calendar with a circled square beside mortgage keys and a calculator", body: `A fixed-rate expiry is a useful time to review your loan against today's household plans. Start before the deadline so the decision does not become a rushed click on the first offer you see.

## Write down the loan you have
List every loan portion, outstanding balance, expiry date, current repayment and remaining term. If there are several portions, check whether they expire together. Ask your lender what happens if you make no selection; rollover processes are not identical across banks.

## Rebuild the household payment budget
Use current income and expenses rather than the figures from your original application. Test the proposed repayment alongside a less comfortable scenario. Include upcoming parental leave, a job change or planned maintenance. If payments may become difficult, contact the lender early instead of waiting for a missed payment.

## Compare flexibility as well as the quoted rate
Ask about extra-payment allowances, lump sums, rate-reservation conditions and the implications of selling within the proposed fixed period. A short period means an earlier review, not a guaranteed cheaper next rate. A longer period provides certainty but may constrain changes.

## Decide what kind of review you need
- Refixing changes the rate arrangement on an existing loan.
- A broader restructure may change portions or repayments.
- [Refinancing](/blog/refinance-total-costs) involves a new loan arrangement and can involve different costs and approval requirements.

Request the final terms in writing and check the effective date and repayment amount. Our [interest rate refix service](/products/interest-rate-refix) can help you organise the options without relying on a forecast being right.` },
      zh: { title: "房贷固定利率到期前的重定清单", description: "新西兰房贷固定期即将结束？检查到期日、还款预算、未来计划，并了解重定利率与再融资的区别。", alt: "标记了一个日期方格的台历，旁边放着钥匙和计算器", body: `固定利率到期，是重新检查贷款是否符合家庭现状的好时机。提前准备，可避免临近截止日匆忙接受看到的第一个报价。

## 先列清现有贷款
记录每一部分的余额、到期日、当前还款额和剩余贷款年限。如有多笔分拆贷款，确认是否同时到期。询问银行未作选择时会如何处理，各行的到期转换流程不完全相同。

## 重新制定家庭还款预算
使用现在的收入和支出，而非首次申请时的数据。除了新报价对应的还款，还要测试较不利的情景，并考虑育儿假、换工作或维修计划。如预计还款有困难，应尽早联系银行，不要等逾期后再处理。

## 同时比较灵活性
询问额外还款额度、一次性还款、锁定报价条件，以及固定期内卖房可能造成的影响。较短固定期意味着较早重新选择，并不保证下次利率更便宜；较长固定期提供确定性，但可能限制调整。

## 明确需要哪一种审查
- 重定利率主要调整现有贷款的利率安排。
- 更全面的重组可能改变分拆或还款方式。
- [再融资](/blog/refinance-total-costs)涉及新的贷款安排，可能有不同费用与审批要求。

取得最终书面条款，核实生效日及还款额。[利率重定服务](/products/interest-rate-refix)可帮助整理选项，不必把决定建立在利率预测一定正确的假设上。` },
      kr: { title: "고정금리 만료 전 모기지 재설정 체크리스트", description: "뉴질랜드 모기지 금리 재설정에 앞서 만료일, 상환 예산과 향후 계획을 확인하고 재융자와의 차이를 알아보세요.", alt: "한 칸에 표시된 탁상 달력과 주택 열쇠, 계산기", body: `고정금리 만료는 현재 가계 상황에 맞게 대출을 검토할 기회입니다. 마감 직전에 첫 제안을 급히 선택하지 않도록 미리 준비하세요.

## 현재 대출을 정리하세요
각 대출 부분의 잔액, 만료일, 상환액과 남은 기간을 적으세요. 여러 부분이 있다면 만료일이 같은지 확인하세요. 아무 선택을 하지 않을 때 어떤 금리가 적용되는지도 은행에 물어보세요. 은행별 절차는 다를 수 있습니다.

## 현재 예산으로 상환액을 검토하세요
처음 신청했을 때가 아니라 지금의 소득과 지출을 사용하세요. 새 상환액과 더 불리한 상황을 함께 계산하세요. 육아휴직, 이직이나 수리 계획도 반영하세요. 상환이 어려울 것으로 보이면 연체를 기다리지 말고 은행에 일찍 연락하세요.

## 금리 외에 유연성도 비교하세요
추가 상환 허용액, 목돈 상환, 금리 예약 조건과 고정 기간 중 매각의 영향을 질문하세요. 짧은 기간은 빨리 다시 검토한다는 뜻이지 다음 금리가 더 낮다는 보장이 아닙니다. 긴 기간은 안정성을 주지만 변경을 제한할 수 있습니다.

## 필요한 검토 범위를 정하세요
- 금리 재설정은 기존 대출의 금리 약정을 바꿉니다.
- 구조 변경은 대출 분할이나 상환 방식까지 바꿀 수 있습니다.
- [재융자](/blog/refinance-total-costs)는 새로운 대출 약정으로 비용과 심사 요건이 달라질 수 있습니다.

최종 조건을 서면으로 받고 적용일과 상환액을 확인하세요. [금리 재설정 서비스](/products/interest-rate-refix)는 금리 예측이 맞을 것이라는 가정 없이 선택지를 정리하도록 돕습니다.` },
    },
  },
  {
    slug: "refinance-total-costs", date: "2026-06-04", category: "mortgage", image: "refinance", service: "refinance", related: ["mortgage-refix-checklist", "extra-mortgage-repayments"],
    sources: [{ name: "Sorted: How to refinance your mortgage", url: "https://sorted.org.nz/guides/home-buying/how-to-refinance-your-mortgage/" }],
    copy: {
      en: { title: "Mortgage refinancing: compare the total cost, not just the rate", description: "Compare NZ refinancing options using switching costs, cashback conditions, the remaining term and a simple break-even calculation.", alt: "Two mortgage folders and a calculator arranged for a refinancing comparison", body: `A lower advertised rate is an invitation to investigate, not enough evidence to switch. Refinancing should be assessed against the cost of leaving the old arrangement and the full terms of the new one.

## Collect written costs first
Ask about any fixed-rate break charge, discharge or legal costs, valuation, new loan fees and repayment of previous cash incentives. A break quote can change, so check its validity. Also read any new cashback conditions: receiving cash now can create a repayment obligation if you leave early.

## Keep the comparison fair
Compare offers using the same balance and remaining term. Resetting a loan to a longer term may lower payments while increasing lifetime interest. If you need lower payments for cash-flow reasons, recognise that trade-off explicitly rather than counting it as a pure saving.

## Use a break-even estimate carefully
Suppose, purely for illustration, switching costs are $2,400 and the estimated monthly saving is $150 on comparable terms. Simple break-even is 16 months. This rough calculation excludes changes in rates, balances and timing; it is not a personalised forecast or offer.

If you expect to sell sooner, the result matters differently. Ask for a fuller comparison including your likely holding period and outstanding balance, not just the first payment.

## Check execution as well as price
- Can you qualify for the new loan on your current circumstances?
- Will the new features support planned extra repayments?
- Who handles the discharge and settlement timing?
- Are linked accounts and automatic payments ready to move?

Our [refinance service](/products/refinance) can help compare options. If no lender change is needed, a [refix review](/blog/mortgage-refix-checklist) may be the more relevant conversation.` },
      zh: { title: "房贷再融资：比较总成本，而不只是利率", description: "评估新西兰房贷再融资时，结合转贷费用、现金返还条件、剩余年限和回本时间，避免只看报价利率。", alt: "并排的贷款文件夹和用于比较再融资成本的计算器", body: `较低的广告利率值得进一步了解，但不足以单独成为转贷理由。再融资应同时考虑退出旧安排的成本和新贷款的完整条款。

## 先取得书面费用
询问固定期提前解约费用、解除抵押或律师费用、估值、新贷款费用，以及原现金奖励是否需要退还。解约报价可能变化，要核实有效期。新现金返还也可能附带提前离开时的返还义务。

## 在相同条件下比较
使用相同余额和剩余年限比较方案。重新延长贷款年限可能降低月供，却增加全期利息。如果为了现金流需要降低月供，应明确承认这一取舍，不要将其全算作节省。

## 谨慎使用回本估算
纯粹举例：转贷费用 2,400 元，在可比条件下预计每月节省 150 元，简单回本期是 16 个月。这没有计入利率、余额及支付时点变化，并非个人预测或贷款报价。

如果计划更早卖房，结果的意义也会不同。应要求把预计持有期和剩余本金纳入完整比较，而不仅是看第一期还款。

## 除价格外，核实执行安排
- 按目前情况能否通过新贷款审批？
- 新功能能否满足额外还款计划？
- 谁负责解除原抵押及交割衔接？
- 关联账户和自动付款是否已安排转换？

[再融资服务](/products/refinance)可帮助比较选项。如果无需换银行，[利率重定评估](/blog/mortgage-refix-checklist)可能更适合。` },
      kr: { title: "모기지 재융자: 금리보다 총비용을 비교하세요", description: "뉴질랜드 재융자의 이전 비용, 캐시백 조건, 남은 기간과 손익분기점을 함께 검토해 보세요.", alt: "재융자 비교를 위해 나란히 놓인 대출 서류철과 계산기", body: `낮은 광고 금리는 검토의 시작이지 은행을 바꿀 충분한 근거는 아닙니다. 기존 약정을 종료하는 비용과 새 대출의 전체 조건을 함께 비교해야 합니다.

## 비용을 먼저 서면으로 받으세요
고정금리 중도해지 비용, 담보 해지 및 법률 비용, 감정평가, 신규 대출 수수료와 기존 현금 혜택 반환 여부를 확인하세요. 중도해지 견적은 바뀔 수 있으므로 유효기간도 확인하세요. 새 캐시백에도 조기 이탈 시 반환 조건이 있을 수 있습니다.

## 같은 기준으로 비교하세요
잔액과 남은 대출 기간을 동일하게 두세요. 기간을 늘리면 상환액이 낮아져도 총이자는 증가할 수 있습니다. 현금흐름 때문에 월 부담을 줄여야 한다면 이를 순수한 절약이 아니라 별도의 절충으로 이해하세요.

## 손익분기 추정은 신중하게 사용하세요
가상의 이전 비용이 NZ$2,400이고 동일 조건의 예상 월 절감액이 NZ$150이라면 단순 손익분기는 16개월입니다. 금리, 잔액과 시점 변화를 제외한 설명용 계산으로 개인별 예측이나 제안이 아닙니다.

그보다 빨리 매각할 계획이라면 결과의 의미가 달라집니다. 첫 상환액뿐 아니라 예상 보유 기간과 남은 원금을 포함한 비교를 요청하세요.

## 실행 절차도 확인하세요
- 현재 상황으로 새 대출 심사를 통과할 수 있나요?
- 추가 상환 계획에 맞는 기능이 있나요?
- 담보 해지와 잔금 일정은 누가 관리하나요?
- 연결 계좌와 자동이체 이전은 준비되었나요?

[재융자 서비스](/products/refinance)에서 선택지를 비교할 수 있습니다. 은행 변경이 필요 없다면 [금리 재설정 검토](/blog/mortgage-refix-checklist)가 더 적합할 수 있습니다.` },
    },
  },
  {
    slug: "offset-and-revolving-credit", date: "2026-06-18", category: "mortgage", image: "offset", service: "home-loans", related: ["fixed-or-floating-mortgage", "extra-mortgage-repayments"],
    sources: [{ name: "Kiwibank: Offset home loans", url: "https://www.kiwibank.co.nz/personal-banking/home-loans/loan-options/offset-mortgages/" }, { name: "Sorted: Mortgage types", url: "https://sorted.org.nz/guides/home-buying/mortgage-types/" }],
    copy: {
      en: { title: "Offset and revolving credit: different ways to manage mortgage cash", description: "Understand offset and revolving credit home loans in NZ, how savings may reduce interest and why spending discipline matters.", alt: "Separate savings jars beside a model home to illustrate offset banking", body: `Offset and revolving credit loans can both connect everyday cash management with mortgage interest, but they are not the same product. The right discussion starts with how money actually flows through your household.

## Understand the account structure
An offset arrangement uses eligible linked account balances when calculating interest on an associated loan. The savings and loan remain separate accounts. A revolving credit facility works more like an overdraft secured against property: money paid in reduces the debt, while drawings increase it within the agreed limit.

Products differ in account eligibility, rates, fees, limits and repayment rules. Read the lender's actual terms. Money used for offsetting may not earn deposit interest.

## Use normal balances, not payday balances
A large balance on salary day may fall quickly as bills are paid. Work through a normal month and estimate what is likely to remain available. For a simplified illustration, a $100,000 offset loan with $20,000 of eligible funds might have interest calculated on $80,000, subject to the product's rules. The principal owed has not disappeared.

## Protect the repayment habit
Easy access to funds can be useful for uneven income, but repeatedly redrawing can slow debt reduction. Set a target balance and review actual progress. Avoid treating the available limit as extra income or an invitation to spend.

## Questions before choosing
- Which accounts qualify, and who can own them?
- What fees and interest rates apply?
- How do required repayments and limits change over time?
- What happens if savings are withdrawn?

Discuss these features through our [home loan service](/products/home-loans). For a simpler approach, consider the principles in our [extra repayments guide](/blog/extra-mortgage-repayments).` },
      zh: { title: "Offset 与循环贷款：如何管理房贷中的现金", description: "了解新西兰 Offset 抵息账户与循环贷款的区别、储蓄对利息的影响，以及使用灵活贷款时的预算纪律。", alt: "房屋模型旁的独立储蓄罐，示意抵息账户安排", body: `Offset 抵息贷款与循环贷款都能把日常现金管理和房贷利息联系起来，但并不是同一种产品。讨论是否适合之前，先看清家庭资金平时如何流动。

## 理解账户结构
Offset 通常用符合条件的关联账户余额，减少对应贷款计算利息的基数；储蓄与贷款仍是独立账户。循环贷款更像以房产作担保的透支额度：存入资金减少债务，在约定额度内取用资金则增加债务。

不同产品在可关联账户、利率、费用、额度和还款规则上存在差别，要阅读具体条款。用于抵息的储蓄可能不再获得存款利息。

## 看日常余额，不只看发薪日
发薪当天余额较高，但支付账单后可能迅速下降。按普通月份估算真正能够持续保留的金额。简单举例，100,000 元抵息贷款对应 20,000 元合资格资金，可能按 80,000 元计算利息，仍以产品规则为准；应还本金并没有消失。

## 保持还款纪律
灵活取用对不均匀收入可能有帮助，但反复提款也会拖慢减债。设定目标余额并检查实际进展，不要把可用额度当成额外收入。

## 选择前要问
- 哪些账户可以关联，账户持有人有何要求？
- 适用什么利率和费用？
- 最低还款及额度如何随时间变化？
- 储蓄取出后会有什么影响？

可通过[房贷服务](/products/home-loans)讨论这些功能，也可参考[额外还款指南](/blog/extra-mortgage-repayments)中的较简单做法。` },
      kr: { title: "오프셋과 회전 신용대출: 모기지 현금 관리의 차이", description: "뉴질랜드 오프셋 및 회전 신용 주택 대출의 차이, 저축과 이자의 관계, 지출 관리의 중요성을 알아보세요.", alt: "오프셋 계좌를 설명하는 집 모형과 분리된 저축병", body: `오프셋과 회전 신용대출은 일상 현금 관리와 모기지 이자를 연결하지만 같은 상품은 아닙니다. 먼저 가계의 실제 자금 흐름을 살펴보세요.

## 계좌 구조를 이해하세요
오프셋은 적격 연결 계좌 잔액을 대출의 이자 계산에 반영합니다. 저축과 대출 계좌는 분리되어 있습니다. 회전 신용대출은 부동산 담보 마이너스 계좌와 비슷합니다. 입금하면 부채가 줄고 약정 한도 내에서 인출하면 늘어납니다.

상품마다 계좌 자격, 금리, 수수료, 한도와 상환 규칙이 다릅니다. 실제 약관을 읽으세요. 오프셋에 사용되는 자금에는 예금 이자가 지급되지 않을 수 있습니다.

## 급여일이 아닌 평소 잔액을 보세요
급여일에 많던 돈도 청구서를 내면 빠르게 줄어듭니다. 보통 한 달 동안 유지할 수 있는 금액을 추정하세요. 단순 예시로 NZ$100,000 대출에 적격 자금 NZ$20,000이 연결되면 상품 규칙에 따라 NZ$80,000에 이자를 계산할 수 있습니다. 원금 자체가 사라지는 것은 아닙니다.

## 상환 습관을 유지하세요
자금 접근성이 불규칙한 소득에 도움이 될 수 있지만 반복 인출은 부채 감소를 늦출 수 있습니다. 목표 잔액과 실제 진도를 비교하세요. 사용 가능한 한도를 추가 소득으로 보지 마세요.

## 선택 전 질문
- 어떤 계좌와 소유자가 연결 자격을 갖나요?
- 금리와 수수료는 무엇인가요?
- 상환 의무와 한도는 시간에 따라 어떻게 바뀌나요?
- 저축을 인출하면 어떤 영향이 있나요?

[주택 대출 서비스](/products/home-loans)에서 기능을 상담하거나 더 단순한 방법인 [추가 상환 가이드](/blog/extra-mortgage-repayments)를 읽어 보세요.` },
    },
  },
  {
    slug: "extra-mortgage-repayments", date: "2026-07-03", category: "mortgage", image: "repayments", service: "interest-rate-refix", related: ["offset-and-revolving-credit", "refinance-total-costs"],
    sources: [{ name: "Sorted: Managing a mortgage", url: "https://sorted.org.nz/guides/home-buying/managing-a-mortgage/" }, { name: "BNZ: Making a lump-sum payment", url: "https://www.bnz.co.nz/support/internet-banking/home-loans/making-a-lump-sum-payment" }],
    copy: {
      en: { title: "Extra mortgage repayments: build a sustainable plan", description: "Plan extra mortgage repayments in New Zealand while checking loan limits, preserving emergency savings and comparing genuine annual payments.", alt: "A hand adding a coin to savings stacks beside a small house model", body: `Small extra repayments can reduce principal sooner, but a useful plan must survive ordinary life. Start with a repeatable surplus rather than an amount that leaves no room for repairs, illness or irregular bills.

## Check the contract before sending money
Fixed loans may limit extra payments or charge for repayments beyond an allowance. Ask your lender about the rules for your particular loan, including how the allowance is measured and whether earlier extra payments count. Do not assume a friend's bank offers the same conditions.

## Compare the annual total
Changing payment frequency alone does not always increase the amount repaid. For illustration, $2,000 paid monthly totals $24,000 a year. Paying $1,000 every fortnight totals $26,000 over 26 payments. That example involves an extra $2,000, not just a different calendar. Confirm the actual schedule your bank proposes.

## Give lump sums a job
Before paying in a bonus, set aside known near-term costs and consider other debt obligations. Ask how a lump sum affects your remaining term and required payments. Money paid into a standard loan may not be available again without a new approval; redraw and offset features have their own conditions.

## Review progress without overcommitting
- Set an affordable extra amount and check the relevant allowance.
- Keep a separate buffer for genuine emergencies.
- Compare balances periodically against the original schedule.
- Revisit the plan after income or household changes.

A [refix review](/products/interest-rate-refix) can be a useful point to discuss repayment settings. Read about [offset and revolving credit](/blog/offset-and-revolving-credit) if access to cash is an important part of the decision. No particular saving is guaranteed; results depend on the loan and payments actually made.` },
      zh: { title: "房贷额外还款：制定能够持续执行的计划", description: "在新西兰安排额外房贷还款时，核实合同限额、保留应急资金，并比较每年实际偿还的总金额。", alt: "手把硬币放到房屋模型旁的硬币堆上", body: `适度增加还款可更早减少本金，但计划必须经得起日常生活的变化。应以可持续结余为基础，而不是把维修、生病或不定期账单所需的空间全部用掉。

## 转账之前先核实合同
固定贷款可能限制额外还款，超过允许范围可能收费。询问自己这笔贷款的具体规则，包括额度如何计算，以及之前的额外还款是否计入。不要假设朋友所在银行的条件同样适用。

## 比较一年实际还了多少
仅改变还款频率，并不一定增加还款总额。例如每月还 2,000 元，一年为 24,000 元；每两周还 1,000 元，按一年 26 次计算为 26,000 元。这个例子多还了 2,000 元，不只是日期安排不同。应确认银行提供的实际计划。

## 明确一次性资金的用途
用奖金还款前，先预留近期已知费用，并考虑其他债务。询问一次性还款会如何影响剩余年限和规定还款额。转入普通贷款的钱可能无法直接再取出，需要重新审批；可再提款或抵息功能也有各自条件。

## 定期回顾，避免过度承诺
- 设定可承担的额外金额并核实限额。
- 单独保留真正的应急资金。
- 定期把实际余额与原计划对照。
- 收入或家庭情况变化后重新评估。

[利率重定评估](/products/interest-rate-refix)也是讨论还款设置的时机。如果资金可取用性很重要，可阅读 [Offset 与循环贷款指南](/blog/offset-and-revolving-credit)。实际节省取决于贷款条款和真实还款，不作特定金额保证。` },
      kr: { title: "모기지 추가 상환: 지속 가능한 계획 만들기", description: "뉴질랜드 모기지 추가 상환 전 계약 한도와 비상자금을 점검하고 연간 실제 상환액을 비교해 보세요.", alt: "집 모형 옆 동전 더미에 동전을 올려놓는 손", body: `추가 상환은 원금을 더 빨리 줄일 수 있지만 일상생활에서 유지할 수 있어야 합니다. 수리, 질병과 비정기 청구서에 쓸 여유를 모두 없애기보다 반복 가능한 잉여금부터 정하세요.

## 송금 전 계약을 확인하세요
고정 대출은 추가 상환을 제한하거나 허용액 초과 시 비용을 부과할 수 있습니다. 한도 산정 방식과 이전 추가 상환의 포함 여부를 은행에 물어보세요. 다른 은행을 이용하는 지인의 조건과 같다고 가정하지 마세요.

## 연간 총액을 비교하세요
납부 빈도만 바꾼다고 총상환액이 늘어나는 것은 아닙니다. 예를 들어 매월 NZ$2,000이면 연간 NZ$24,000입니다. 2주마다 NZ$1,000씩 26번 내면 NZ$26,000입니다. 단순한 일정 변경이 아니라 NZ$2,000을 더 내는 예시입니다. 은행의 실제 일정을 확인하세요.

## 목돈의 용도를 정하세요
보너스를 상환하기 전에 가까운 시기의 비용과 다른 부채를 고려하세요. 목돈 상환이 남은 기간과 의무 상환액에 어떤 영향을 주는지 질문하세요. 일반 대출에 넣은 돈은 새 승인 없이 다시 인출하지 못할 수 있습니다. 재인출과 오프셋 기능에도 별도 조건이 있습니다.

## 무리하지 말고 진행 상황을 검토하세요
- 감당 가능한 추가 금액과 허용 한도를 확인합니다.
- 비상자금을 따로 남깁니다.
- 실제 잔액과 원래 일정을 주기적으로 비교합니다.
- 소득이나 가계 상황이 바뀌면 계획을 수정합니다.

[금리 재설정 검토](/products/interest-rate-refix)는 상환 설정을 논의할 기회입니다. 현금 접근성이 중요하다면 [오프셋과 회전 신용대출](/blog/offset-and-revolving-credit)을 살펴보세요. 실제 절감액은 대출 조건과 납부 실적에 따라 다르며 보장되지 않습니다.` },
    },
  },
];
