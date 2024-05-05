---
title: Oblivious Amplitude Amplification
author: jiheon_lee
description: Paper by Berry, Childs, Cleve, Kothari, and Somma (2014)
date: 2024-05-04 00:29:00 -0400
categories: [Topic Study, Physics]
tags: [Quantum Physics, Quantum Simulation]
math: true
toc: true
---

## Introduction
This posts talks about the lemma on _Oblivious Amplitude Amplification_, from the paper published in 46th ACM Symposium on Theory of Computing, pp. 283-292 (2014) by Berry, et al. The notion of oblivious amplitude amplification can have the same performance as standard amplitude amplification, but can be applied even when the reflection about the input state is unavailable. I encourage the reader and myself to look at standard amplitude amplification also.

## Lemma
Let $U$ and $V$ be unitary matrices on $\mu + n$ qubits and $n$ qubits, respectively, and let $\theta\in (0,\pi/2)$. Suppose that for any $n$-qubit state $\ket{\psi}$,
$$
\begin{equation}
  U\ket{0^\mu}\ket{\psi} = \sin(\theta)\ket{0^\mu}V\ket{\psi} + \cos(\theta)\ket{\Phi^\perp},
\end{equation}
$$
where $\ket{\Phi^\perp}$ is an $(\mu + n)$-qubit state that depends on $\ket{\psi}$ and satisfies $\Gamma\ket{\Phi^\perp} = 0$, where $\Gamma:=\ket{0^\mu}\bra{0^\mu}\otimes\mathbb{I}$. Let $R:=2\Gamma - \mathbb{I}$ and $S:=-URU^\dagger R$. Then for any $l\in\mathbb{Z}$,
$$
\begin{equation}
  S^lU\ket{0^\mu}\ket{\psi} = \sin((2l+1)\theta)\ket{0^\mu}V\ket{\psi} + \cos((2l+1)\theta)\ket{\Phi^\perp}.
\end{equation}
$$

> proof is coming up soon! Look at the original paper p.10 if you can't wait for me to write it here!
{: .prompt-warning }
