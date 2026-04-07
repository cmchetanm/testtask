9. The product manager asks for transactions to update automatically without a page refresh. Would you
use WebSockets, polling, or Server-Sent Events — and why?


answer: I would use server sent events.
  > transactions require one way updates, not bidirection communication.
  > SSE is simpler and lightweight as compared to websocket.
  > polling is inefficient due to repeated api requests on the server in the given interval of time increases unnecessary load



10. A senior engineer proposes adding Redux to this codebase. A colleague says it is unnecessary. Where
do you stand, and what would drive your decision?


answer: I would not introduce redux at this stage as it has simple states(transaction filter, loading, errors) and redux will be and overhead. react hooks are sufficient for now and it keeps code clean and simple without adding unnecessary complexity.
I would consider redux if the states are deeply shared accross components.
