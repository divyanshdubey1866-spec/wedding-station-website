import { NextResponse } from 'next/server';
import { estimateBudget } from '../../../../lib/budgetEstimator';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { event, lead } = body;
    const result = estimateBudget(event);
    // attach lead if provided
    if (lead) result.lead = lead;
    // create a simple id
    const id = `res_${Date.now().toString(36)}_${Math.random().toString(36).slice(2,8)}`;
    // include id
    const payload = { id, ...result };
    return NextResponse.json(payload);
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
