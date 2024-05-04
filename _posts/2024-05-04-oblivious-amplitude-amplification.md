---
title: Oblivious Amplitude Amplification
author: jiheon_lee
description: Paper by Berry, Childs, Cleve, Kothari, and Somma (2014)
date: 2024-05-04 00:29:00 -0400
categories: [Paper Reading, Physics]
tags: [Quantum Physics, Quantum Simulation]
math: true
---

## Introduction
This posts talks about the lemma on _Oblivious Amplitude Amplification_, from the paper published in 46th ACM Symposium on Theory of Computing, pp. 283-292 (2014) by Berry, et al. The notion of oblivious amplitude amplification can have the same performance as standard amplitude amplification, but can be applied even when the reflection about the input state is unavailable. I encourage the reader and myself to look at standard amplitude amplification also.

## Lemma
$$
Let U and V be unitary matrices on \mu + n qubits and n qubits, respectively, and let \theta\in (0,\pi/2). Suppose that for any n-qubit state \bra{\psi},
\begin{equation}
  U\bra{0^\mu}\bra{\psi} = \sin(\theta)\bra{0^\mu}V\bra{\psi} + \cos(\theta)\bra{\Phi^\perp},
\end{equation}
where \bra{\Phi^\perp} is an (\mu + n)-qubit state that depends on \bra{\psi} and satisfies \Gamma\bra{\Phi^\peri} = 0, where \Gamma:=\bra{0^\mu}\ket{0^\mu}\otimes\mathbb{I}. Let R:=2\Gamma - \mathbb{I} and S:=-URU^\dagger R. Then for any l\in\mathbb{Z},
\begin{equation}
  S^lU\bra{0^\mu}\bra{\psi} = \sin((2l+1)\theta)\bra{0^\mu}V\bra{\psi} + \cos((2l+1)\theta)\bra{\Phi^\perp}.
\end{equation}
$$

> proof is coming up soon! Look at the original paper p.10 if you can't wait for me to write it here!
{: .prompt-warning }
