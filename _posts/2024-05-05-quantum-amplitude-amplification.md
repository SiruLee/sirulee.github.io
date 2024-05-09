---
title: Quantum Amplitude Amplification and Estimation
author: jiheon_lee
description: Paper by Brassard, Høyer, Mosca, and Tapp (2000)
date: 2024-05-05 10:40:00 -0400
categories: [Paper Reading, Physics Paper]
tags: [Quantum Physics, Quantum Simulation]
math: true
toc: true
---

## Introduction
> _Amplitude amplification_ is a process that allows to find a good $x$ after an expected number of applications of $\mathcal{A}$ and its inverse which is proportional to $1/\sqrt{a}$, assuming algorithm $\mathcal{A}$ makes no measurement (Brassard, et al., 2000)

This posts is written after reading Chapter 2: Quantum amplitude amplification of the paper by Brassard and Hoyer[^r1], specifically the part with the probability of success $a$ known. Intuitively, the classical probabilistic paradigm would increase the probability of success by a constant on each iteration. This results in $1/N$ iterations on average to find success. In contrast, quantum amplitude amplification increases the _amplitude_ of success by a constant on each iteration. Since amplitudes correspond to square root of probabilities, this would result in approximately $1/\sqrt{\alpha}$ times to find success, where $\alpha$ is the probability that a quantum state is measured and turns out to be a success.

## Basics
First, define a boolean function $\chi : \mathbb{Z} \rightarrow \lbrace 0,1 \rbrace$ that partitions the Hilbert space $\mathcal{H}$ into a direct sum of two subspaces, a "good" subspace and a "bad" subspace.

#### The Good Subspace
The good subspace is the subspace spanned by the set of basis states $\ket{x}\in\mathcal{H}$ where $\chi(x) = 1$.

#### The Bad Subspace
The bad subspace is the subspace spanned by the set of basis states $\ket{x}\in\mathcal{H}$ where $\chi(x) = 0$.

## Procedure

#### The Unitary Q
Note that every pure state $\ket{\Upsilon}\in\mathcal{H}$ has a unique decomposition as $\ket{\Upsilon} = \ket{\Upsilon_0} + \ket{\Upsilon_1}$ where $\ket{\Upsilon_0}$ is the projection onto the bad subspace and $\ket{\Upsilon_1}$ is the projection onto the good subspace. 

Let $\mathcal{A}$ be any quantum algorithm that acts on $\mathcal{H}$ without measurement. Let $\ket{\Psi} = \mathcal{A}\ket{0}$. The amplification process follows the repeated application of the unitary operator 

$$
\begin{equation}
    \mathcal{Q} = -\mathcal{A}\mathcal{S}_0\mathcal{A}^{-1}\mathcal{S}_\chi,
\end{equation}
$$

where $\mathcal{S}\_0$ changes the sign of the amplitude if and only if the state is the zero state $\ket{0}$ and $\mathcal{S}\_\chi$ changes the sign of the amplitude of the _good states_.

Then it follows that for a basis vectors $\ket{\Psi_1}$ and $\ket{\Psi_0}$ of the subspace $\mathcal{H}_\Psi$

$$
\begin{align}
    \mathcal{Q}\ket{\Psi_1} = (1-2a)&\ket{\Psi_1} - 2a&\ket{\Psi_0}\\
    \mathcal{Q}\ket{\Psi_0} = 2(1-a)&\ket{\Psi_1} + (1-2a)&\ket{\Psi_0}
\end{align}
$$
where $a = \langle\Psi_1 | \Psi_1\rangle$. Thus the subspace $\mathcal{H}_\Psi$ is _invariant_ under $\mathcal{Q}$.

The paper also explains the action of $\mathcal{Q}$ on $\mathcal{H}_\Psi$ as the operator

$$
\begin{equation}
    \mathbf{U}_\Psi\mathbf{U}_{\Psi_0},    
\end{equation}
$$
where
$$
\begin{align}
    \mathbf{U}_{\Psi_0} = \mathbb{I} - \frac{2}{1-a}\ket{\Psi_0}\bra{\Psi_0},\\
    \mathbf{U}_\Psi = \mathbb{I} - 2\ket{\Psi}\bra{\Psi}.
\end{align}
$$
In other words, $\mathbf{U}\_{\Psi_0}$ is a reflection through the line spanned by the vector $\ket{\Psi_0}$, and ${\mathbf{U}}\_\Psi$ is a reflection through the line spanned by the vector $\ket{\Psi}$.

#### In the Orthogonal Complement
For the orthogonal complement $\mathcal{H}^\perp_\Psi$ of $\mathcal{H}\_\Psi$ in $\mathcal{H}$, $\mathcal{A}\mathcal{S}\_0\mathcal{A}^{-1}$ acts as the identity. Hence the operator $\mathcal{Q}$ acts just as $-\mathcal{S}\_\chi$ on the complement. Thus, $\mathcal{Q}^2$ acts as the identity on the complement, and every eigenvector of $\mathcal{Q}$ in $\mathcal{H}^\perp_{\Psi}$ has eigenvalue +1 or -1. This leads our interest to consider the action of $\mathcal{Q}$ on an arbitrary initial vector $\ket{\Upsilon}$ in $\mathcal{H}$ projected onto $\mathcal{H}\_\Psi$.

The unitarity of $\mathcal{Q}$ makes the subspace $\mathcal{H}\_\Psi$ to have an orthonormal basis consisting of two eigenvectors of $\mathcal{Q}$:

$$
\begin{equation}
    \ket{\Psi_\pm} = \frac{1}{\sqrt{2}}\left(\frac{1}{\sqrt{a}}\ket{\Psi_1} \pm \frac{i}{\sqrt{1-a}}\ket{\Psi_0} \right)
    \label{eq:eigenvectors}
\end{equation}
$$

with the corresponding eigenvalues of 

$$
\begin{equation}
    \lambda_\pm = e^{\pm 2i\theta_a}
    \label{eq:eigenvalues}
\end{equation}
$$

where the angle $0\leq\theta_a\leq \pi/2$ is defined so that

$$
\begin{equation}
    \sin^2(\theta_a) = a = \langle \Psi_1 | \Psi_1 \rangle
\end{equation}
$$

> By the spectral theorem of unitary matrix: unitary matrices are diagonalizable
{: .prompt-info }

#### Amplification
Now the operator $\mathcal{Q}$ can be used to boost the success probability $a$ of the quantum algorithm $\mathcal{A}$. By expanding $\ket{\Psi} = \mathcal{A}\ket{0}$ in the eigenvector basis,

$$
\begin{equation}
    \mathcal{A}\ket{0} = \ket{\Psi} = -\frac{i}{\sqrt{2}}\left(e^{i\theta_a}\ket{\Psi_+} - e^{-i\theta_a}\ket{\Psi_-} \right).
\end{equation}
$$

By applying the operator $\mathcal{Q}$ by $j$ times, the state evolves to

$$
\begin{align}
    \mathcal{Q}^j\ket{\Psi} & = -\frac{i}{\sqrt{2}}\left(e^{(2j+1)i\theta_a}\ket{\Psi_+} - e^{-(2j+1)i\theta_a}\ket{\Psi_-}\right)\\
    & = \frac{1}{\sqrt{a}}\sin((2j+1)\theta_a)\ket{\Psi_1} + \frac{1}{\sqrt{1-a}}\cos((2j+1)\theta_a)\ket{\Psi_0}
\end{align}
$$

Then the final measurement after $j$ applications of $\mathcal{Q}$ will produce a good state with probability of

$$
\begin{equation}
    \mathbb{P}(good) = \sin^2((2j+1)\theta_a)
\end{equation}
$$

Ultimately, in order to make the probability close to 1, $j\in\mathbb{N}$ has to be chosen depends on $\theta_a$, which itself depends on $a$. If the value of $a>0$ is known, then by choosing $j = \lfloor\pi/4\theta_a\rfloor$, we have the probability of success _at least_ $\max(1-a, a)$. It follows that the expected number of applications of $\mathcal{A}$ improves from $1/a$ to at most $(2m+1)/\max(1-a, a)\in\Theta(1/\sqrt{a})$ applications of $\mathcal{A}$ and $\mathcal{A}^{-1}$. 

> From the result of amplification procedure, $\mathcal{Q}^j\mathcal{A}\ket{0}$, and the definition of $\mathcal{Q}$ where each of $\mathcal{A}$ and $\mathcal{A}^{-1}$ appears.
{: .prompt-info }

## Future Reading
I suggest reading Grover's original paper on his search algorithm to see how exactly the idea of quantum amplitude amplification was applied[^r2].

[^r1]: Brassard, G., Høyer, P.. (2 May 2000). _Quantum Amplitude Amplification and Estimation_.
[^r2]: Grover, Lov K.. (July 1997). _Quantum mechanics helps in searching for a needle in a haystack_. Physical Review Letters. Vol. 79.